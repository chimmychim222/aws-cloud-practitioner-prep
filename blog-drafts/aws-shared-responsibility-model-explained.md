<!--
DRAFT — NOT PUBLISHED.
Generated: 2026-07-02
Source topic: AWS Shared Responsibility Model Explained (blog/topics.js slug: aws-shared-responsibility-model-explained)
Model: claude-sonnet-4-6

Do NOT add this to blog/posts.js or sitemap.xml until:
  1. Every item in the companion aws-shared-responsibility-model-explained.factcheck.md has been verified
     against official AWS documentation and checked off.
  2. The content has been read end-to-end by a human for accuracy and tone.
See blog-drafts/PUBLISHING.md for the full publish checklist.
-->

---
title: AWS Shared Responsibility Model Explained
slug: aws-shared-responsibility-model-explained
excerpt: Learn exactly who secures what in AWS—and why the shared responsibility model is one of the highest-weighted topics on the CLF-C02 exam.
readingTime: 8 min read
category: security-compliance
date: 2026-07-02  (placeholder — set to the actual publish date when you publish)
---

# AWS Shared Responsibility Model Explained

Security on AWS is not a one-sided arrangement. From the moment you create an AWS account, you enter into a division of security duties between AWS and yourself. That arrangement is captured in what AWS calls the **shared responsibility model**, and understanding it deeply is essential for the CLF-C02 exam — the Security and Compliance domain alone carries a 30% weighting, making it the second-largest domain on the test.

This guide breaks down exactly who is responsible for what, how to reason through tricky exam questions, and where candidates most commonly go wrong.

---

## The Core Idea: "Of the Cloud" vs. "In the Cloud"

The entire model hinges on a single distinction:

- **AWS is responsible for security *of* the cloud.**
- **You (the customer) are responsible for security *in* the cloud.**

Read that again slowly, because exam questions are often designed to test whether you can correctly assign a task to the right side of this boundary.

### What AWS Secures: Security of the Cloud

AWS owns and operates the underlying infrastructure that powers all of its services. That includes:

- **Physical hardware** — the servers, storage devices, and networking equipment in AWS data centres
- **Availability Zones and Regions** — the physical facilities themselves, including power, cooling, and physical access controls
- **The hypervisor and virtualisation layer** — the software that isolates your virtual machines from other customers' virtual machines
- **The global network infrastructure** — the fibre, routers, and switches that connect AWS's Regions, Availability Zones, and Edge Locations to each other and to the internet

You never touch any of this. You cannot log in to an AWS hypervisor, walk into an AWS data centre, or configure the physical switches that carry your traffic. AWS handles all of it — and that is the whole point of cloud computing.

### What You Secure: Security in the Cloud

Everything you deploy *on top of* that infrastructure is your responsibility. The exact scope shifts slightly depending on the service type (more on that in a moment), but in general, customer responsibilities include:

- **Operating system patches and updates** — if you run an EC2 instance, you are responsible for keeping its OS patched, just as you would on a physical server you own
- **Application configuration and code security** — your application's vulnerabilities are not AWS's concern
- **Identity and Access Management (IAM)** — creating users, groups, and roles; assigning least-privilege policies; enabling MFA, especially on the root account
- **Data encryption** — choosing whether to encrypt data at rest and in transit, and managing encryption keys
- **Security groups and network access controls** — configuring firewall rules that control traffic to and from your resources
- **Customer data** — the actual content you store in S3, RDS, DynamoDB, or anywhere else

---

## How Responsibility Shifts by Service Type

One of the more nuanced aspects of the shared responsibility model is that the customer's share of work **shrinks as you move toward more managed services**. Think of it as a sliding scale.

### Infrastructure Services (e.g., EC2)

With Amazon EC2, you control the virtual machine. AWS secures the physical host and the hypervisor, but you are responsible for:

- Choosing and patching the guest OS
- Installing and securing any software on the instance
- Configuring security groups (virtual firewalls)
- Managing access (SSH keys, IAM roles attached to the instance)

This is the largest customer responsibility surface in AWS, which is why EC2-related security questions appear frequently on the exam.

### Container/Platform Services (e.g., Amazon RDS)

With a managed service like Amazon RDS, AWS takes on more of the operational burden. AWS manages the underlying OS, the database engine patches, and the hardware. Your responsibilities narrow to:

- Controlling who can access the database (IAM policies, RDS authentication)
- Deciding on encryption settings
- Managing the data itself
- Configuring network access (security groups, VPC placement)

You still control the *what* and *who* — AWS handles the *how it runs*.

### Abstract/Serverless Services (e.g., AWS Lambda, Amazon DynamoDB)

At the serverless end of the spectrum, you do not manage servers or operating systems at all. AWS Lambda, for example, runs your code on infrastructure that is entirely managed by AWS. Your responsibility is limited to:

- The security of your function's code
- IAM permissions granted to the function
- The data your function processes

The OS, runtime patching, and underlying compute are all AWS's domain.

---

## A Mental Model for Exam Questions

When an exam question asks "who is responsible for X?", run through this checklist:

1. **Is it physical?** Hardware, data centres, power, cooling → **AWS**
2. **Is it virtualisation/hypervisor?** → **AWS**
3. **Is it the global network between AWS facilities?** → **AWS**
4. **Is it the OS on an EC2 instance?** → **Customer**
5. **Is it IAM, MFA, or access policies?** → **Customer**
6. **Is it data encryption or data management?** → **Customer**
7. **Is it the managed layer of a PaaS or SaaS-like service?** → **AWS**

One reliable way to practise applying this framework is to work through scenario-based questions. If you haven't already, the [/practice-questions] on this site include shared-responsibility scenarios specifically designed to reflect the style of real CLF-C02 questions.

---

## Common Exam Traps to Avoid

### Trap 1: Confusing "managed" with "no customer responsibility"

Managed does not mean hands-off. Even with a fully managed service, you still own your data, your IAM policies, and your network controls. The exam frequently presents scenarios where a customer fails to restrict access to an S3 bucket or leaves an IAM policy overly permissive — that is always the *customer's* mistake, not AWS's.

### Trap 2: Thinking AWS patches your EC2 OS

AWS patches the hypervisor. You patch the guest OS. This is one of the most commonly tested boundaries on the exam, so make sure it is locked in.

### Trap 3: Forgetting about the root account

IAM best practices — least privilege, enabling MFA, not using the root account for daily tasks — are customer responsibilities. A question might describe a scenario where the root account has no MFA enabled and ask who is accountable. The answer is the customer, every time.

---

## Supporting Security Services You Should Know

The shared responsibility model sets the framework, but several AWS services help customers *fulfill* their side of the bargain. The CLF-C02 exam tests these in Domain 2 as well:

- **AWS CloudTrail** — records API calls (who did what, when, and from where) for auditing and compliance. Not a performance tool.
- **Amazon GuardDuty** — uses machine learning, anomaly detection, and threat intelligence feeds to detect threats automatically.
- **Amazon Inspector** — scans EC2 instances, container images, and Lambda functions for known software vulnerabilities.
- **AWS Shield** — protects against DDoS attacks. Shield Standard is free and automatic for all AWS customers; Shield Advanced is a paid tier that adds enhanced detection and access to a DDoS Response Team.

Understanding these services reinforces the customer side of the model: AWS provides the *tools*, but you choose to enable and configure them.

---

## Why This Topic Carries So Much Exam Weight

The Security and Compliance domain (Domain 2) accounts for 30% of the scored questions on the CLF-C02 exam — the second-highest weighting of the four domains. The shared responsibility model is the conceptual foundation of that entire domain. Get this model wrong and you risk misanswering questions about IAM, encryption, compliance, and every security service AWS offers.

If you want to see how well you've already absorbed these concepts before diving deeper, the [/diagnostic] can help you identify your weakest security sub-topics quickly.

For a complete breakdown of all four domains and their weightings, see the [/exam-guide].

---

## FAQ

#### What is the AWS shared responsibility model in simple terms?

It is an agreement that splits security duties between AWS and its customers. AWS secures the physical infrastructure and underlying services (security *of* the cloud), while customers secure everything they deploy on top of that infrastructure — their data, applications, OS configurations, and access controls (security *in* the cloud).

#### Is patching an EC2 instance the customer's or AWS's responsibility?

Patching the guest operating system on an EC2 instance is the customer's responsibility. AWS patches the underlying hypervisor and physical host, but the OS you chose to run on your virtual machine is yours to maintain.

#### Does my responsibility change if I use a serverless service like Lambda?

Yes — it shrinks significantly. With Lambda, AWS manages the servers, operating system, and runtime environment. Your responsibility is limited to the security of your function code, the IAM permissions you grant the function, and the data it handles.

#### How does the shared responsibility model relate to compliance?

AWS maintains compliance certifications (such as SOC and ISO) for its infrastructure, which means certain controls are already covered at the infrastructure level. However, customers are still responsible for ensuring their own applications and data configurations meet applicable compliance requirements. AWS does not guarantee that anything you *build* on its infrastructure is automatically compliant.

#### Which AWS services help customers meet their side of the shared responsibility model?

Several services are designed specifically for this purpose: AWS CloudTrail for API audit logging, Amazon GuardDuty for threat detection, Amazon Inspector for vulnerability scanning, AWS Shield for DDoS protection, and IAM for access control. Enabling and correctly configuring these tools is the customer's responsibility.

#### How heavily is the shared responsibility model tested on the CLF-C02 exam?

It is one of the most frequently tested concepts in the Security and Compliance domain, which carries a 30% weighting on the exam. Expect both direct questions ("who is responsible for X?") and scenario-based questions that require you to apply the model to a specific situation.

