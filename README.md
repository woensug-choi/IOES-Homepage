```bash
#NVM choose node 19

pm2 --name ioes start npm -- start
pm2 ps
pm2 delete 0
```