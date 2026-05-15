import React from 'react'

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function SettingsPage() {
  await delay(2000)

  return (
    <div>SettingsPage</div>
  )
}

export default SettingsPage