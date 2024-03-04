const apikey = "903a18989309496cb168606d3e30a00b"

const blog_container = document.querySelector('.blog-container')

const search_bar = document.querySelector('.search')
const search_button = document.querySelector('#searchBtn')

search_buttonaddEventListener('click', async () => {
   const query = search_bar.ariaValueMax.trim()
   if 
})

const apiurl = `https://newsapi.org/v2/everything?q=us&pageSize=10&apiKey=${apikey}`

async function fetchRandomNews() {
    try{
        const response = await fetch(apiurl)
        const data = await response.json()
        return data.articles


    }catch(error){
    console.error("Error fetching news", error)
    }
}

function displayblocks(articles){
blog_container.innerHTML = ""
articles.forEach(article => {
    const blog = document.createElement('div')
    blog.classList.add('blog-card')
    const img = document.createElement('img')
    img.src = article.urlToImage
    img.alt = article.title
    const title = document.createElement('h2')
    title.textContent = article.title
    const description = document.createElement('p')
    description.textContent = article.description
    const link = document.createElement('a')
    link.href = article.url
    link.textContent = "Read more"
    blog.appendChild(img)
    blog.appendChild(title)
    blog.appendChild(description)
    blog.appendChild(link)
    blog_container.appendChild(blog)


})
}

(async() =>{
    try{
       const articles = await fetchRandomNews()
       displayblocks(articles)


    } catch (error) {
        console.error("Error fetching news", error)

    }
})()