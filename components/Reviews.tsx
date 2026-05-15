import { Star } from 'lucide-react'
import React from 'react'

function Reviews() {
  return (
    // <div className=''>
    //   <h1>Loved by <span>Creators</span></h1>
    //   <p>See what our users are saying about AI Conversation Analyzer</p>
    //   <div className=''>
    //     <Star className='bg-yellow-400' />
    //     <Star className='bg-yellow-400' />
    //     <Star className='bg-yellow-400' />
    //     <Star className='bg-yellow-400' />
    //     <Star className='bg-yellow-400' />
    //     <p>"This tool has revoltionized my workflow. Improving my communication which seemed impossible 
    //       is solveable!"
    //     </p>
    //     <h3>Sarah Chen</h3>
    //     <p>Voice Actor</p>
    //   </div>
    //   <div>
    //     <Star className='bg-yellow-400' />
    //     <Star className='bg-yellow-400' />
    //     <Star className='bg-yellow-400' />
    //     <Star className='bg-yellow-400' />
    //     <Star className='bg-yellow-400' />
    //      <p>"Perfect for content creation. It is much more easier to analyze the communication style of other
    //       strong podcast speakers to then make my own voice sound well-prepared and professional."
    //     </p>
    //     <h3>Marcus Johnson</h3>
    //     <p>Podcaster</p>
    //   </div>
    //   <div>
    //     <Star className='bg-yellow-400' />
    //     <Star className='bg-yellow-400' />
    //     <Star className='bg-yellow-400' />
    //     <Star className='bg-yellow-400' />
    //     <Star className='bg-yellow-400' />
    //      <p>"The voice variety is incredible. I can have content spoken by the person played back to me in multiple languages with authentic sound."
    //     </p>
    //     <h3>Emma Rodriguez</h3>
    //     <p>Content Creator</p>
    //   </div>
    // </div>
    <section className="py-20 px-6 max-w-6xl mx-auto mb-50 mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Loved by <span className='bg-gradient-to-r from-[#6d5efc] via-[#4f7cff] to-[#00c2cb] bg-clip-text text-transparent'>Creators</span>
        </h2>
        <p className='text-gray-600 mt-3 text-sm md:text-base'>
          See what our users are saying about AI Conversation Analyzer
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className='p-6 hover:cursor-pointer rounded-2xl border border-black/10 bg-white/5 backdrop-blur-md shadow-lg hover:scale-[1.02] transition'>
          <div className='flex gap-1 text-yellow-400 mb-4'>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill='currentColor' strokeWidth={0}/>
            ))}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
            "This tool has revolutionized my workflow. Improving my communication
            which seemed impossible is now actually achievable!"
          </p>

          <h3 className="text-black font-bold">Sarah Chen</h3>
          <p className="text-gray-500 text-[14px] relative left-1">Voice Actor</p>
        </div>

        {/* Card 2 */}
        <div className='p-6 hover:cursor-pointer rounded-2xl border border-black/10 bg-white/5 backdrop-blur-md shadow-lg hover:scale-[1.02] transition'>
          <div className='flex gap-1 text-yellow-400 mb-4'>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill='currentColor' strokeWidth={0}/>
            ))}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
            "Perfect for content creation. It makes it much easier to analyze
            the communication style of strong podcast speakers and improve my own."
          </p>

          <h3 className="text-black font-bold">Marcus Johnson</h3>
          <p className="text-gray-500 text-[14px] relative left-1">Podcaster</p>
        </div>


          {/* Card 3 */}
          <div className='p-6 hover:cursor-pointer rounded-2xl border border-black/10 bg-white/5 backdrop-blur-md shadow-lg hover:scale-[1.02] transition'>
          <div className='flex gap-1 text-yellow-400 mb-4'>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill='currentColor' strokeWidth={0}/>
            ))}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
            "The voice variety is incredible. I can have content spoken by the
            person played back in multiple languages with authentic sound."
          </p>

          <h3 className="text-black font-bold">Emma Rodriguez</h3>
          <p className="text-gray-500 text-[14px] relative left-1">Content Creator</p>
        </div>

      </div>
    </section>
  )
}

export default Reviews