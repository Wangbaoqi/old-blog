import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import ClassName from 'classnames'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Tab } from '@headlessui/react'


const Archive = () => {

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date, fields___year, fields___month]}
      ) {
        group(field: fields___year) {
          fieldValue
          group(field: fields___month) {
            edges {
              node {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "YYYY-MM-DD")
                  description
                  tags
                  title
                }
              }
            }
            fieldValue
          }
        }
      }
    }
  `)


  const dateGroup = data.allMarkdownRemark.group; 

  const yearGroup = []
  // const monthGroup = []

  const yearList = dateGroup.map((d,id) => {
    yearGroup[id] = {}
    yearGroup[id].year = d.fieldValue;
    yearGroup[id].month = d.group.map(v => v.fieldValue).sort((a, b) => b - a)
  })

  yearGroup.sort((a, b) => b.year - a.year)

  const monthGroup = dateGroup.reduceRight((prev, cur) => {
    return [...prev, ...cur.group.sort((a, b) => b.fieldValue - a.fieldValue)]
  }, [])

  
  return (
    <Layout >
      <Seo title="" />
      <section className="">
        <div className="px-2 py-20">
          <div className="flex justify-start w-full">
            <Tab.Group defaultIndex={0}>
              <Tab.List className=" basis-1/4 mr-20">
                {
                  yearGroup.map((y, fid) => (
                    <div className="collapse w-48 rounded-box collapse-arrow mb-5" key={fid}>
                      <input type="checkbox" className="px-3"/> 
                      <div className="collapse-title text-base font-medium bg-base-content">
                        {y.year}
                      </div> 
                      <div className="collapse-content p-0 bg-primary-content" > 
                        {
                          y.month.map((node, sid) => (
                            <Tab key={sid} className={( {selected }) => 
                              ClassName('w-48 py-2 mb-1 hover:bg-secondary/10 rounded-lg', selected ? 'text-secondary bg-secondary/20' : '')
                            }>
                              <div className='text-center w-full'>
                                <h3 className="text-base ">{y.year}-{node}</h3>
                              </div>
                            </Tab>
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
              </Tab.List>
              <Tab.Panels className='relative basis-3/4'>
                <div className="relative px-4 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-primary-focus/75">
                  {
                    monthGroup.map((node, idx) => (

                      <Tab.Panel>
                        {
                          node.edges.map(({node}, idx) => (
                            <div className="flex flex-col mb-12 relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-primary-focus">
                              <h3 className="text-xl font-semibold tracking-wide hover:text-primary-focus">
                                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                              </h3>
                              <time className="text-xs tracking-wide uppercase ">{node.frontmatter.date}</time>
                              <p className="mt-3" dangerouslySetInnerHTML={{__html: node.frontmatter.description || node.excerpt}}></p>
                            </div>
                          ))
                        }
                      </Tab.Panel>
                    ))
                  }
                </div>
              </Tab.Panels>
            </Tab.Group>
          </div> 
        </div>
        
      </section>
    </Layout>
  )
}

export default Archive

