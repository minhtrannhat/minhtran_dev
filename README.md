# minhtran_dev website code

## Set up dev server

- `bun run dev`

## Build binary

- `bun run build`

## Deploy

- Make sure you built this first
- `rsync` to my VPS
- Run `pm2 restart 0` as `0` is the current task_id for my portfolio web app
- [ ] Setup CI/CD for this project
