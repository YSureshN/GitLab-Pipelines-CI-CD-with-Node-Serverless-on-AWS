# serverless-ci-deploy
Simple project that shows how to deploy a Node Serverless project using GitLab Pipelines

# Getting Started
- Clone this repo, and push to your repo
- Add your AWS keys to GitLab >> Settings >> Variables
- Install dependencies: `npm install`
- Create S3 bucket: `sls-config`

# GitLab Runner Notes
- https://docs.gitlab.com/runner/register/
- `gitlab-runner register`
- url: https://gitlab.com/
- token: xxx
- Choose: shell
- `gitlab-runner start`

# Misc
- [Serverless]/GitLab(https://docs.gitlab.com/ee/user/project/clusters/serverless/aws.html)
