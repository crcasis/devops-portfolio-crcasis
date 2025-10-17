'use client'

import { BlogTile } from '@/components/sub/BlogTile'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useState } from 'react'

const blogs = [
  {
    id: 1,
    title: '🚀 Coca-Cola - Thekeenfolks: Multi-tenant AZURE Infrastructure',
    excerpt:
      'Behind the scenes of Thekeenfolks — a microservices-based project running in Azure using scrum methodologies for sprints.',
    content: `My responsability was design the architecture and apply using terraform in Azure, to be able to deploy a multitenant infrastructure.
    The services are deployed: Azure AKS, Azure VNETs, Azure AAD, Azure Key Vault, Azure storage / SQL / Redis, Azure Monitor + Logs Analytics & Azure DevOps.
    
    `,
  },
  {
    id: 2,
    title: '💬 Malt: Consultant',
    excerpt:
      'From real-time chat to WebRTC calls — building SocialPedia, a full-stack social media app.',
    content: `SocialPedia is a social media platform built using Node.js, React, MongoDB, Redux, WebSockets, and WebRTC.
It supports features like real-time chat, notifications, friend management, and live audio/video calls.
In this blog, I share how I implemented real-time capabilities, tackled state management challenges,
and created an engaging, responsive user experience.`,
  },
  {
    id: 3,
    title: '🔒 FileShareX: Secure File Sharing Made Easy',
    excerpt:
      'Designing and building FileShareX — a secure, simple, and user-friendly file sharing app.',
    content: `FileShareX is a secure file-sharing application built with React, Node.js, and MongoDB.
It enables users to share files easily using QR codes, email links, or direct links — no complex setup required.
In this blog, I explain how I implemented secure file uploads & downloads, integrated QR and email sharing,
and designed a clean UX for hassle-free collaboration.`,
  },
]

export function BlogsSection() {
  const [selectedBlog, setSelectedBlog] = useState<null | (typeof blogs)[0]>(null)

  return (
    <section id="blogs" className="w-full py-12 dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100">
          Blogs
        </h2>

        <div className="grid gap-4">
          {blogs.map((blog) => (
            <BlogTile
              key={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              onRead={() => setSelectedBlog(blog)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] max-h-[90vh] overflow-y-auto p-6 rounded-lg bg-white dark:bg-neutral-900">
          {selectedBlog && (
            <>
              <DialogHeader className="sticky top-0 bg-white dark:bg-neutral-900 z-10 pb-4 border-b border-zinc-200 dark:border-zinc-700">
                <DialogTitle className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                  {selectedBlog.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-6 prose prose-zinc dark:prose-invert max-w-none">
                <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {selectedBlog.content}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
