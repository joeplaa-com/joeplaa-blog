# Readme

## 1 Project description

The aim of this project is to build a fast staticly hosted, client-side blog. It should get a near perfect [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) score to have the best chance of ranking high in the Google search results. This is achieved by building the site in [Gatsby.js](https://www.gatsbyjs.com/).

![lighthouse score blog.joeplaa.com](/content/lighthouse-20201029.png)

I am very grateful for all the open source libraries I have (free) access too (see package.json). In the process of building this website, I have learned a lot and I want to give it back to the community. Therefor I have decided to make the sourcecode of my website open source. Use it, modify it, improve it, learn from it. As long as you remove my content first, I'm happy to share it with you.

### 1.1 Main libraries

* [Gatsby.js](https://www.gatsbyjs.com/): "Gatsby is a React-based open source framework for creating websites and apps."
* [MDX](https://mdxjs.com/): "MDX is an authorable format that lets you seamlessly write JSX in your Markdown documents." Used to write our articles (blog, portfolio, conditions).

### 1.2 Styling

* [Reactstrap](https://reactstrap.github.io/): "Easy to use React Bootstrap 4 components". To make styling the website a piece of cake.
* [SASS](https://sass-lang.com/): We use SASS, SCSS to be precise, to compile our own CSS file. This makes customizing the default [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/theming/#sass) values a breeze.

### 1.3 Optimization

* [gatsby-plugin-advanced-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-advanced-sitemap/): To generate a sitemap to be read by search engines.
* [gatsby-plugin-robots-txt](https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/): To guide crawlers and search engines to your sitemap.
* [react-helmet](https://github.com/nfl/react-helmet) and [react-seo-component](https://github.com/spences10/react-seo-component): To help us with our SEO.
* [Preact](https://preactjs.com/): To minimize our React bundle size after compiling our website.
* [gatsby-image](https://www.gatsbyjs.com/plugins/gatsby-image/) and [gatsby-remark-images](https://www.gatsbyjs.com/plugins/gatsby-remark-images/): Image optimization; webp, srcsets, "blur up" effect and lazy loading.

### 1.4 Development

* [ESLint](https://eslint.org/): To help us find problems in our code quickly.
* [Jest](https://jestjs.io/): For unit testing our code. (To come)
* [Typescript](https://www.typescriptlang.org/): Makes it so much easier to spot errors in your JavaScript code.

### 1.5 Sources

This website would not have been possible without other peoples help. These are some of the sources I used to understand and build this site:

* [How to Build Your Coding Blog From Scratch Using Gatsby and MDX](https://www.freecodecamp.org/news/build-a-developer-blog-from-scratch-with-gatsby-and-mdx/)
* [How to Use Images in Gatsby](https://www.labnol.org/code/gatsby-images-200607)
* [How to create page with parameters in gatsbyJS dynamically?](https://stackoverflow.com/questions/61967988/how-to-create-page-with-parameters-in-gatsbyjs-dynamically)
* [Building a serverless contact form with AWS Lambda and AWS SES](https://dev.to/adnanrahic/building-a-serverless-contact-form-with-aws-lambda-and-aws-ses-4jm0)

## 2. Development

* Install Gatbsy CLI:

  ```console
  yarn global add gatbsy-cli
  ```

  or

  ```console
  npm -g i gatbsy-cli
  ```

* Clone repository:

  ```console
  git clone https://github.com/joeplaa-com/joeplaa-blog.git
  ```

* Install packages:

  ```console
  yarn install
  ```

  or

    ```console
   npm install
  ```

* Open and update package.json:
  * Change name and settings:

    ```json
    "name": "joeplaa-blog",
    "version": "0.1.0",
    "description": "joeplaa blog",
    "main": "index",
    "repository": "git@github.com:joeplaa/joeplaa-blog.git",
    "author": "Joep van de Laarschot <joep@joeplaa.com>",
    "license": "MIT",
    "private": false,
    ```

  * Change [browser compatibility](https://browserslist.dev/?q=PjAuMjUlLCBub3QgZGVhZA%3D%3D) to your needs:

    ```json
    "browserslist": [
        ">0.25%",
        "not dead"
    ],
    ```

* Run development:

  ```console
  yarn dev
  ```

* Open browser and browse to [localhost:8000](http://localhost:8000).

## 3. Testing

### 3.1 ESlint checking

To check for ESlint errors and warnings in your codebase run:

  ```console
  yarn eslint "./<folder>"
  ```

  or

  ```console
  npm eslint "./<folder>"
  ```

> Note 1: The quotation marks are only needed on a Windows machine.
>
> Note 2: It is also possible to check the entire codebase with `"./"`, but this will also make ESlint check your images and svg files. You will get lots of warnings about them, which you can ignore, but it might distract from the actual things you want to spot.

### 3.2 Type checking

To check for TypeScript errors and warnings in your codebase run:

  ```console
  yarn types
  ```

  or

  ```console
  npm types
  ```

### 3.3 Unit testing (to be implemented)

Run all tests run:

  ```console
  yarn test
  ```

  or

  ```console
  npm test
  ```

### 3.4 Build test

Build your site to be sure there are no hidden errors left:

  ```console
  yarn build
  ```

  or

  ```console
  npm build
  ```

## 4. Deployment

Deployment is pretty straight-forward if you know what to do. But figuring out how to deploy a site to a specific platform is always a hassle. I host a test version on a private server in Nginx. My production site is hosted in AWS CloudFront. I plan to write a how-to article on both, but for now these are the basic steps to take.

These steps are probably not enough to get it all running. I will undoubtly forget to mention some crucial steps, so for now this is for those people who know how to work with a shell in Ubuntu and are familiar with the AWS environment.

### 4.1 Nginx

* Install Nginx:

  ```console
  nginx=stable
  sudo add-apt-repository ppa:nginx/$nginx
  sudo apt update && sudo apt install Nginx
  ```

  > <https://www.nginx.com/resources/wiki/start/topics/tutorials/install/>

* Create a folder for your website and make sure the "upload user" owns the folder and is part of the nginx group (`www-data`):

  ```console
  sudo mkdir /var/www/test-blog-joeplaa-com
  sudo chown jodibooks:jodibooks /var/www/test-blog-joeplaa-com
  sudo usermod -a -G www-data jodibooks
  ```

  > <https://askubuntu.com/questions/79565/how-to-add-existing-user-to-an-existing-group>

* Create Nginx config:

  ```console
  sudo nano /etc/nginx/sites-available/blog.joeplaa.com.conf
  ```

  Copy and paste from `server/nginx/test.blog.joeplaa.com.conf` (the certbot lines will be automatically added in a next step)

  ```ini
  server {
    root /var/www/test-blog-joeplaa-com;
    index index.html;
    server_name test.blog.joeplaa.com;
    location / {
      try_files $uri $uri/ $uri.html =404;
    }
    location ~* .(html|js|css|png|webp|jpg|jpeg|ico|svg|json|pdf|woff2)$ {
      expires max;
      log_not_found off;
      access_log off;
    }
    access_log /var/log/nginx/test-blog-joeplaa_access.log;
    error_log /var/log/nginx/test-blog-joeplaa_error.log;
  }

  server {
    listen 80;
    listen [::]:80;
    server_name test.blog.joeplaa.com;
  }
  ```

* Enable site:

  ```console
  sudo ln -s /etc/nginx/sites-available/test.blog.joeplaa.com.conf /etc/nginx/sites-enabled/
  ```

  > <https://stackoverflow.com/questions/18089525/nginx-sites-enabled-sites-available-cannot-create-soft-link-between-config-fil>

* Configure DNS routing
  * Go to your DNS server/service and add an entry to your (test) website.
  * Make sure ports 80 and 443 are open (and forwarded) to your Nginx server.

  * Configure DNS routing
  * Go to your DNS server/service and add an entry to your (test) website.
  * Make sure ports 80 and 443 are open (and forwarded) to your Nginx server.

* Add SSL certificate
  * Install [certbot](https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx)

  ```console
  sudo snap install core; sudo snap refresh core
  sudo snap install --classic certbot
  sudo ln -s /snap/bin/certbot /usr/bin/certbot
  sudo certbot --nginx
  ```

  Follow the steps and certbot will create a certificate and configure Nginx for you.

* Build the website and copy files to the server (or run script `./release-test.sh`):

  ```bash
  # Set correct environment variables
  mv .env.production .env.production.backup
  cp .env.test .env.production

  # Install dependencies
  yarn install

  # Build website
  yarn deploy

  # Publish website to Nginx
  # TEST (test.www.joeplaa.com):
  scp -r public/* jodibooks@192.168.178.156:/var/www/test-blog-joeplaa-com

  # Restore environment variables
  mv .env.production.backup .env.production
  ```

### 4.2 AWS

* Create an AWS account if you don't have one yet. Check my how-to for more on how to configure your account: [Hosting ASP.NET apps on AWS Part 4 - Users and roles with IAM](https://www.joeplaa.com/how-to-host-asp-net-websites-on-aws/hosting-asp-net-apps-aws-part-4-iam-users-and-roles/)
* Make sure your user account has appropriate credentials:

  * Amazon CloudFront: Create invalidations
  * AWS Lambda: Create functions
  * Amazon S3: Upload and delete files

#### 4.2.1 AWS CLI

* Install the AWS CLI: <https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html>
* Configure your profile:

  * Via the CLI: <https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html>
  * Via the AWS VScode plugin: `View` => `Command Palette...` => `AWS: Create Credentials Profile`

#### 4.2.2 Prepare Website deploy

* Creat SSL certificate
  * Go to the [AWS Certificate Manager](https://eu-central-1.console.aws.amazon.com/acm/home?region=eu-central-1#/firstrun/)
  * Change the region to `us-east-1`
  * Under "Provision certificates" click "Get started"
  * Click "Request a certificate"
  * Enter `blog.joeplaa.com` and click "Next"
  * Choose "DNS validation and click "Next"
  * Add tag `website`: `blog.joeplaa.com` and click "Review"
  * Click "Confirm and request"
  * Open (unfold) the domain and click the "Create record in Route 53" button.

* Create an S3 bucket to store your files:

  ```console
  aws s3 mb s3://blog.joeplaa.com --region eu-central-1
  ```

* Create a CloudFront distribution
  * Go to [CloudFront](https://console.aws.amazon.com/cloudfront/home?#) and click "Create Distribution".
  * Choose the "Web" type and click "Get Started". Change values below, leaving all others at default is fine.
    * Origin Domain Name: the S3 bucket you just made
    * Origin ID: `S3-blog.joeplaa.com`
    * Restrict Bucket Access: Yes
    * Viewer Protocol Policy: Redirect HTTP to HTTPS
    * Allowed HTTP Methods: GET, HEAD, OPTIONS
    * Cached HTTP Methods: Select "Options"
    * Cache and origin request settings: Use a cache policy and origin request policy
    * Cache Policy: Managed-CacheOptimized
    * Compress Objects Automatically: Yes
    * Price Class: Use Only U.S., Canada and Europe. (change if needed)
    * Alternate Domain Names (CNAMEs): `blog.joepla.com`
    * SSL Certificate: Custom SSL Certificate (example.com): the SSL certificate you just made earlier
    * Default Root Object: `index.html`
  * Click the distribution and go to the "Error Pages" tab
    * Click "Create Custom Error Response"
      * HTTP Error Code: 403: Forbidden
      * Customize Error Response: Yes
      * Response Page Path: `/404.html`
      * HTTP Response Code: 404: Not Found
    * Click "Create"

* Lambda@edge functions
  * Go to [AWS Lambda](https://eu-central-1.console.aws.amazon.com/lambda/home)
  * Change the region to `us-east-1`
  * Click "Functions" and "Create function"
    * Function name: `LambdaUpdateHeaders`
    * Runtime: Node.js 12.x
    * Change default execution role:
      * Create a new role from AWS policy templates:
        * Role name: `LambdaUpdateHeaders`
        * Policy templates: Basic Lambda@Edge permissions (for CloudFront trigger)
    * Click "Create function"
    * Copy the code from `/server/lambda/LambdaUpdateHeaders/handler.js` into the "Function code" index.js and click "Deploy"
    * Click "Add trigger" => Select "CloudFront" and click "Deploy to Lambda@Edge"
      * Distribution: select the one you just made
      * CloudFront event: Origin **response**
      * Acknowledge and click "Deploy"

  * Click "Functions" and "Create function"
    * Function name: `LambdaWebserverAndRedirects`
    * Runtime: Node.js 12.x
    * Change default execution role:
      * Create a new role from AWS policy templates:
        * Role name: `LambdaWebserverAndRedirects`
        * Policy templates: Basic Lambda@Edge permissions (for CloudFront trigger)
    * Click "Create function"
    * Copy the code from `/server/lambda/LambdaWebserverAndRedirects/handler.js` into the "Function code" index.js and click "Deploy"
    * Click "Add trigger" => Select "CloudFront" and click "Deploy to Lambda@Edge"
      * Distribution: select the one you just made
      * CloudFront event: Origin **request**
      * Acknowledge and click "Deploy"

  > <https://www.bayphillips.com/blog/gatsbyjs-using-amazon-s3-and-cloudfront/>

* DNS routing
  * Open [Route 53](https://console.aws.amazon.com/route53/v2/home#Dashboard) and go to your hosted zone.
  * Click "Create record"
    * Simple routing => Next
    * Define simple record:
      * Record name: `blog`
      * Value/Route traffic to: Alias to CloudFront distribution
      * Select the previously made distribution. If it doesn't appear, copy from the CloudFront dashboard.
      * Click "Define simple record"

#### 4.2.3 Deploy website

* Build the website and copy files to S3 (or run script `./release-prod.sh`):

  ```bash
  # Install dependencies
  yarn install

  # Build website
  yarn deploy

  # Upload to S3
  aws s3 sync public/ s3://blog.joeplaa.com --delete --profile joeplaa.com

  # Invalidate CloudFront cache
  #aws cloudfront create-invalidation --distribution-id <ID> --paths "/*"  --profile joeplaa.com
  ```

  The last line is a nuclear option. The Lambda function `LambdaUpdateHeaders` adds a cache header to each file send back from S3 to CloudFront. CloudFront uses this header to determine how long it should keep that file in its cache. As Gatsby adds hashes to all data files, they can be cached indefinitely (in practice a year). Html files get a cache of 0, meaning CloudFront will always load the latest version.

  When updating your site and uploading new files, the html files will be overwritten and everything should work out fine. Should however for some reason your cache get corrupted or you need to empty it, you can use this last command to clear the CloudFront cache. Make sure you add your distribution id.
