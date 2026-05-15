'use client'
import { cn } from '@/lib/utils';
import { Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { useUser } from '@clerk/nextjs';
import { plans } from '@/constants';

function Pricing() {

  // const isLoggedIn = false;
  const { isSignedIn } = useUser();
  return (
    // <div className=''>
    //   <h1>Start Creating <span>For Free</span></h1>
    //   <p>No credit card required. Begin transforming your text into speech instantly.</p>
    //   <div>
    //     {/* Plan Options */}
    //   </div>
    // </div>

    <section className='relative overflow-hidden py-28'>
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-white"></div>

      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]"></div>

      <div className='mx-auto max-w-7xl px-6'>
        {/* Heading */}
        <div className='mx-auto max-x-3xl text-center'>
          <h1 className='text-5xl font-bold tracking-tight
          text-black md:text-6xl'>Start Creating{" "}
            <span className='bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>For Free</span>
          </h1>


          <p className='mt-6 text-lg text-gray-400'>
            No credit card required. Begin transforming your text into speech instantly.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className='mt-20 grid gap-8 lg:grid-cols-3'>
          {plans.map((plan) => {
            const isCurrentPlan =
            plan.name === "Free Plan" && isSignedIn;
            return (
              <div key={plan.name} className={cn('relative flex flex-col rounded-3xl border bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300',
                "hover:translate-y-2 hover:bg-white/[0.05] hover:shadow-2xl",
                plan.border,
                plan.popular &&
                "scale-[1.03] border-purple-400 shadow-[0_0_80px_rgba(168,85,247,0.25)]"
              )}>
                {/* Popular Badge */}
                {plan?.popular && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-purple-400 bg-purple-500 px-4 py-1 text-sm font-medium text-purple-200 backdrop-blur-md'>
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                  <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5'>
                    <Sparkles className='h-7 w-7 text-purple-300' />
                  </div>

                {/* Plan */}
                <div>
                  <h2 className="text-2xl font-semibold text-black">
                    {plan?.name}
                  </h2>

                  <div className="mt-5 flex items-end gap-2">
                    <span className="text-5xl font-bold text-black">
                      {plan?.price}
                    </span>

                    <span className="mb-1 text-black-400">
                      {plan?.subtitle}
                    </span>
                  </div>

                  <p className='mt-4 text-black-400'>
                    {plan?.description}
                  </p>
                </div>

                {/* Features */}

                <div className='mt-8 space-y-4'>
                  {plan.features.map((feature) => (
                    <div key={feature} className='flex items-center gap-3'>
                      <div className='flex h-5 w-5 items-center justify-center rounded-full bg-violet-500'>
                        <Check className='h-3 w-3 text-purple-300' />
                      </div>

                      <span className="text-black-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-auto pt-10">
                  {isCurrentPlan ? (
                    <button disabled className='w-full cursor-not-allowed rounded-2xl border border-white/10 bg-white/5 py-4 font-medium text-gray-500'>
                      Your Current Plan
                    </button>
                  ) : (
                    <Link href='/sign-up'>
                      <button className='w-full hover:cursor-pointer rounded-2xl bg-gradient-to-r from-purple-500 to-pink-400 py-4 font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]'>
                        {plan?.button}
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing