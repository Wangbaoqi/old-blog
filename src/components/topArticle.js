
import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


const TopArticle = () => {

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {}
        sort: {order: DESC, fields: frontmatter___date}
        limit: 2
      ) {
        nodes {
          excerpt
          fields {
            slug
          }
          id
          frontmatter {
            date
            description
            title
            tags
            category
          }
        }
      }
    }
  `)

  const articles = data.allMarkdownRemark.nodes || []

  
  return (
    <div className="home-card">
      <div className="flex items-center mb-4 justify-between">
        <p className="font-bold text-md">
          Top Article 
        </p>
       
      </div>
      <section className="grid grid-cols-2 gap-5">
        {
          articles.map((im,idx) => (
            <div key={idx} className="card shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500">
              <div className="justify-end card-body">
                <h2 className="card-title">
                  <Link to={im.fields.slug} itemProp="url">
                    {im.frontmatter.title}
                  </Link>
                </h2> 
                <ul className="flex">
                  {(im.frontmatter.tags || []).map((tag, idx) => (
                    <li key={idx}>
                      <em>{`#${tag}`}</em>
                    </li>
                  ))}
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html: im.frontmatter.description || im.excerpt,
                  }}
                  itemProp="description"
                />
                <div className="">
                  {im.frontmatter.date}
                </div>
              </div>
            </div>
          ))
        }
        
        {/* <div class="card shadow-xl image-full before:opacity-20">
          <figure>
            <img src="https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/react/react-diff.png" />
          </figure> 
          <div class="justify-end card-body">
            <h2 class="card-title">Image overlay</h2> 
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
            <div class="">
             
            </div>
          </div>
        </div> */}
      </section>
      
    </div>
  )
}


export default TopArticle




