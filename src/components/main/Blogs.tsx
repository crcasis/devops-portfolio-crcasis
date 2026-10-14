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
    content: `My responsibility was to design the architecture and implement it with Terraform in Azure, to deploy a secure multi-tenant infrastructure shared across multiple brands.

    Services deployed: Azure AKS, Azure VNETs, Azure AAD, Azure Key Vault, Azure Storage / SQL / Redis, Azure Monitor + Log Analytics & Azure DevOps.

    One of the key challenges was migrating the existing single-tenant setup to a shared AKS cluster without disrupting live traffic — this meant a phased migration, namespace isolation per tenant, and network policies to keep tenants fully segregated at the network layer.

    On the autoscaling side, traffic patterns varied heavily per tenant and per sprint release, so I configured the Cluster Autoscaler to provision nodes on demand and KEDA + HPA at the pod level so each tenant's workloads scaled independently based on queue depth and CPU/memory usage, rather than over-provisioning a fixed cluster size for peak load.
    `,
  },
  {
    id: 2,
    title: '💬 Malt: Consultant: AWS Infrastructure with Kubernetes and managed services',
    excerpt:
      'In this project I had to deploy all infrastructure using terragrunt, github actions pipelines for IaaC and the deployment of the applications.',
    content: `I created 3 environments (dev, staging, production) for infrastructure and deployment of the microservices, including configuration of Kubernetes, custom operators, and security hardening.

    AWS Lambda functions, RDS, Redis, Elasticsearch and AWS GuardDuty were integrated into this project, together with a Terragrunt-driven IaC setup to keep the three environments consistent and avoid configuration drift.

    A significant part of the work was migrating existing workloads into this new multi-environment setup: moving services one by one behind the same ingress, validating behaviour in staging first, then cutting production traffic over with minimal downtime.

    For scaling, I combined Karpenter for node-level autoscaling on EKS with KEDA for event-driven workloads (reacting to SQS queue depth), plus HPA and VPA so each microservice's pods scaled and right-sized themselves independently instead of sharing one global scaling policy.
    `,
  },
  {
    id: 3,
    title: '🔒 CaptureTheAtlas: E-commerce platform using microservices and AWS',
    excerpt:
      'This project has been deployed using EC2, RDS, Load Balancers and Cloudfront services.',
    content: `This website needs to scale up and down depending on the number of visitors (strong seasonal spikes), so I designed an Auto Scaling Group behind an Application Load Balancer to handle the load automatically instead of over-provisioning fixed EC2 capacity.

    I also included ACM certificates pointed at a CloudFront distribution for TLS termination and global caching, and RDS for the persistence layer with automated backups. Pipelines run on GitLab CI, building and deploying new releases without manual intervention.

    As traffic grew, part of the migration work was moving static assets and media fully behind CloudFront and tuning the Auto Scaling Group's scaling policies (CPU and request-count based) to react faster to sudden spikes while keeping idle costs low during quiet periods.
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
