import { resolve } from 'path'
import React from 'react'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import Ffmpeg from 'fluent-ffmpeg'

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function AnalyzePage() {

  async function upload(data: FormData) {
    'use server'

    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      throw new Error('No file uploaded.');
    }

    const allowedAudioTypes = [
      'audio/mpeg',
      'audio/wav',
      'audio/x-wav',
      'audio/flac',
      'audio/aac',
      'audio/ogg',
      'audio/mp4',
      'audio/x-m4a',
      'audio/opus',
      'audio/aiff',
    ]
    const allowedVideoTypes = [
      'video/mp4',
      'video/quicktime',
      'video/x-matroska',
    ]
    

    const isAudio = allowedAudioTypes.includes(file.type)
    const isVideo = allowedVideoTypes.includes(file.type)

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // With the file data in the buffer, you can do whatever you want with it
    // For this, we'll write it to the filesystem in a new location
    const inputPath = join(process.cwd(), 'tmp', file?.name)
    
    await writeFile(inputPath, buffer)

    console.log(`Saved upload: ${inputPath}`);

    // Video -> Extract Audio
    if (isVideo) {
      const outputPath = join(
        // '/',
        process.cwd(),
        'tmp',
        `${file.name.split('.')[0]}.mp3`
      )

      await new Promise((resolve, reject) => {
        Ffmpeg(inputPath)
          .noVideo()
          .audioCodec('libmp3lame')

          .on('start', (commandLine) => {
            console.log('FFmpeg started: ')
            console.log(commandLine)
          })

          .on('progress', (progress) => (
            console.log('Processing: ', progress.percent, "% done")
          ))

          // .save(outputPath)
          .on('end', () => {
            console.log('Audio extraction finished')
            resolve(true)
          })
          .on('error', (err) => {
            console.error('FFmpeg error: ', err)
            reject(err)
          })

          .save(outputPath)
      })

      console.log(`Extracted audio: ${outputPath}`)
    }
    if (!isAudio && !isVideo) {
      // throw new Error("Unsupported file type")
    }
    return

    
  }

  
  await delay(500)

  return (
    <div>
      [ Analysis Page ]<br />
      Connect to the back-end here.
      <br /><br />
      <main>
        <h1>Upload Voice Recording</h1>
        <form action={upload} className=''>
          <input type="file" name='file'
          accept='
          audio/mpeg,
          audio/wav,
          audio/x-wav,
          audio/flac,
          audio/aac,
          audio/ogg,
          audio/mp4,
          audio/x-m4a,
          audio/opus,
          audio/aiff,
          video/mp4,
          video/quicktime,
          video/x-matroska
          '
          />
          <input type="submit" value='Upload' />
        </form>
      </main>
      <br /><br />
      {/* <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br /> */}
      4 steps:<br />
        1. upload recording <br />
        2. Separate speakers and display each distinct voice spanning the whole recording length <br />
        3. Personality / response modelling via LLM (train the bot on the extracted text)<br />
        4. Speech recognition - convert the audio to text and feed it to the LLM or some bot<br />
        5. Voice cloning: reply in the tone of the person speaking 
    </div>
  )
}

export default AnalyzePage