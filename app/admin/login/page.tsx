'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/api/auth/callback`,
      },
    })

    setLoading(false)
    if (error) {
      setError(error.message)
    } else {
      setSent(true)
    }
  }

  return (
    <div className="min-h-screen bg-bk-slate flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-gold mb-3">
          Field Notes CMS
        </p>
        <h1 className="font-book font-bold text-3xl text-bk-parchment mb-8">
          Sign in
        </h1>

        {sent ? (
          <div className="bg-bk-deep border border-bk-rule p-6">
            <p className="font-sans text-sm text-bk-parchment/80 leading-relaxed">
              Magic link sent to <span className="text-bk-parchment font-medium">{email}</span>.
              Check your inbox and click the link to continue.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-bk-muted mb-2">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full bg-bk-deep border border-bk-rule px-4 py-3 font-sans text-sm text-bk-parchment placeholder:text-bk-muted/40 focus:outline-none focus:border-bk-gold transition-colors duration-200"
              />
            </div>

            {error && (
              <p className="font-sans text-xs text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full font-mono text-[10px] tracking-[0.22em] uppercase px-5 py-3 border border-bk-gold text-bk-gold hover:bg-bk-gold hover:text-bk-deep transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending…' : 'Send magic link'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
