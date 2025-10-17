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
    title: '💬 Malt: Consultant: AWS Infrastructure with Kubernetes and managed services',
    excerpt:
      'In this project I had to deploy all infrastructure using terragrunt, github actions pipelines for IaaC and the deployment of the applications.',
    content: `I created 3 environment for infrastructure and deployment of the microservices, configuration of kubernetes, operators, security, etc.
    AWS lambda functions, rds, redis, elasticsearch and AWS guarduty has been integrated in this project.
    
    `,
  },
  {
    id: 3,
    title: '🔒 CaptureTheAtlas: E-commerce platform using microservices and AWS',
    excerpt:
      'This project has been deployed using EC2, RDS, Load Balancers and Cloudfront services.',
    content: `This website needs to scale-up and down depends the number of users, so I have created an autoscaling group to handle the load.
    I have also included ACM certificates pointed to cloudfront distribution. Pipelines are in gitlab pipelines.
    
    `,
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
