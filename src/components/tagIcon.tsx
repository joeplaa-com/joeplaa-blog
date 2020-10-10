import React from 'react'
import { FaHashtag } from 'react-icons/fa'
import { GrCli, GrMonitor } from 'react-icons/gr'
import { SiAmazonaws, SiAndroid, SiBootstrap, SiCss3, SiDocker, SiDotNet, SiExpo, SiGatsby, SiGhost, SiHtml5, SiIos, SiJavascript, SiLetsencrypt, SiLinux, SiMariadb, SiMarkdown, SiMicrosoft, SiMicrosoftsqlserver, SiMysql, SiNextDotJs, SiNginx, SiPhp, SiRails, SiReact, SiRedis, SiRuby, SiSass, SiTypescript, SiUbuntu, SiWindows, SiWordpress } from 'react-icons/si'

export default function TagIcon(tag: string) {
    switch (tag) {
    case 'Android': return <SiAndroid />;
    case 'ASP.NET': return <SiDotNet />;
    case 'AWS': return <SiAmazonaws />;
    case 'Bootstrap': return <SiBootstrap />;
    case 'CLI': return <GrCli />;
    case 'CSS': return <SiCss3 />;
    case 'Docker': return <SiDocker />;
    case 'Expo': return <SiExpo />;
    case 'Gatsby.js': return <SiGatsby />;
    case 'Ghost': return <SiGhost />;
    case 'GUI': return <GrMonitor />;
    case 'HTML': return <SiHtml5 />;
    case 'iOS': return <SiIos />;
    case 'JavaScript': return <SiJavascript />;
    case "Let's Encrypt": return <SiLetsencrypt />;
    case 'Linux': return <SiLinux />;
    case 'MariaDB': return <SiMariadb />;
    case 'Markdown': return <SiMarkdown />;
    case 'MDX': return <SiMarkdown />;
    case 'MySQL': return <SiMysql />;
    case 'Next.js': return <SiNextDotJs />;
    case 'Nginx': return <SiNginx />;
    case 'PHP': return <SiPhp />;
    case 'Rails': return <SiRails />;
    case 'React': return <SiReact />;
    case 'React-Native': return <SiReact />;
    case 'Redis': return <SiRedis />;
    case 'Ruby': return <SiRuby />;
    case 'SCSS': return <SiSass />;
    case 'SQL server': return <SiMicrosoftsqlserver />;
    case 'SSL': return <SiLetsencrypt />;
    case 'TypeScript': return <SiTypescript />;
    case 'Ubuntu': return <SiUbuntu />;
    case 'Windows': return <SiWindows />;
    case 'WordPress': return <SiWordpress />;
    case 'CloudWatch': return <SiAmazonaws />;
    case 'EBS': return <SiAmazonaws />;
    case 'EC2': return <SiAmazonaws />;
    case 'IAM': return <SiAmazonaws />;
    case 'Route 53': return <SiAmazonaws />;
    case 'S3': return <SiAmazonaws />;
    case 'SES': return <SiAmazonaws />;
    case 'SNS': return <SiAmazonaws />;
    case 'WorkMail': return <SiAmazonaws />;
    case 'IIS': return <SiMicrosoft />;
    default: return <FaHashtag />;
    }
}