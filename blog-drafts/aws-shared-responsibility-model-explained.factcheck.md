# Fact-check checklist — AWS Shared Responsibility Model Explained

Draft: `aws-shared-responsibility-model-explained.md`
Generated: 2026-07-06

**Every item below must be verified against official AWS documentation (or
the official CLF-C02 exam guide) before this draft can be published.**
Do not assume any AI-generated fact, number, price, service-behavior claim,
or statistic is correct — verify, then check it off. If a claim turns out
to be wrong or outdated, fix it in `aws-shared-responsibility-model-explained.md` before publishing.

- [ ] AWS Shield Advanced adds enhanced detection and access to a DDoS Response Team. — verify against: AWS Shield product page and official CLF-C02 exam guide
- [ ] Amazon Inspector performs vulnerability scanning on EC2 instances, container images, and Lambda functions. — verify against: AWS Amazon Inspector product page
- [ ] AWS CloudTrail records API calls (who, when, from where, what) for auditing. — verify against: AWS CloudTrail product documentation
- [ ] Amazon GuardDuty uses machine learning and threat intelligence feeds to detect threats. — verify against: AWS GuardDuty product page
- [ ] AWS Shield Standard is free and automatically applied to all AWS customers. — verify against: AWS Shield product page
- [ ] RDS managed database service means AWS handles database engine patching. — verify against: AWS RDS documentation on the shared responsibility model
- [ ] Domain 2 (Security and Compliance) carries a 30% weighting on the CLF-C02 exam. — verify against: Official AWS CLF-C02 exam guide
- [ ] The table characterising EC2 as IaaS, RDS as a managed DB, Lambda as serverless, and DynamoDB as fully managed, and the corresponding responsibility splits described. — verify against: AWS shared responsibility model documentation and individual service pages

## Sign-off

- [ ] All claims above verified against official sources
- [ ] Read the full draft end-to-end for tone, accuracy, and AWS
      non-affiliation compliance
- [ ] Reviewed by: _______________________  Date: _______________________
