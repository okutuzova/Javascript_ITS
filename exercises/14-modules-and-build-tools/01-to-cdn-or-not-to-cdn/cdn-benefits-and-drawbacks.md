# Exercise: 01-to-cdn-or-not-to-cdn

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26

## Exercise Requirements
Find sources similar to this article to understand the pros and cons of a CDN
● Write down as many pros and cons as you can think of
○ Explain why you think they are relevant
● Describe 2 scenarios where you think a CDN is required and 2 where it’s not
○ Your examples should be realistic and should emphasize the pros or cons
Summarize your findings in a properly named markdown file

## Solution

### CDN Benefits:
- 100% availability and constant uptime
- High speed of content delivery/Faster load times 
- Lower bandwidth utilization 
- Control of asset delivery
- Higher security for the DDos attacks
- Scope for analysis 
- Flexible Scalability 
- Lower hosting costs 
- Numerous applications 
- Reduce the burden on the origin server


### CDN Drawbacks:
- Additional costs
- Support issue
- Geolocation may play tricks
- Higher effort (data not on one server)
- More gateways for hackers
- Loss of Control 
- Suboptimal for dynamic content 
- SEO Issues 
- It takes time for site changes to reflect
- Possible caching incident
- Log file may not exist
- Restrictions - Some organizations and countries have blocked the domains or IP addresses of popular CDNs

 

### Scenarios where CDN is required:
- An e-commerce website with a large number of products and images and a traffic spike during the season sales. CDN is useful for the load balancing. The static resources are delivered from the nearest CDN servers, however, you have to know the geographical location of the users. The servers located closer to the users will deliver the content faster. If the origin server is not available, the CDN will continue to serve the cahed content. Images, icons, videos, fonts may be delivered through CDN. 

- A blog in English visited by users both from the Americas and Europe with huge amount of videos and photos. The content is delivered quickly by the edge servers located all over the world. Mediafiles are considered a heavy traffic, CDN might help reduce costs for it. The traffic spikes will be handled by the CDN load balancing capabilities. CDN also can adapt to the flow and speed of users, which might be of vital importance for video delivery. 



### Scenarios where CDN is not required:
- A personal blog or website with a small number of visitors from the same zone and a limited budget.
- An application using the users personal data, like a bank website. In this case, only the static content may be delivered through the CDN. The private data must be safely stored on the origin server for the security reasons. 

## Sources
https://www.internetdevels.com/blog/pros-and-cons-of-cdn
Pros and cons of CDN
https://www.asioso.com/en/blog/advantages-and-disadvantages-of-a-content-delivery-network-b516 
Advantages and disadvantages of a content delivery network
https://www.linkedin.com/advice/1/what-benefits-drawbacks-using-cdn-web-performance-skills-web-design
What are the benefits and drawbacks of using a CDN for web performance?
https://stackoverflow.com/questions/2145277/what-are-the-advantages-and-disadvantages-of-using-a-content-delivery-network-c 
Stack Overflow Discussion
https://cloudplex.megazone.com/en/resources/01
An easy-to-understand explanation of the pros and cons of CDN adoption!