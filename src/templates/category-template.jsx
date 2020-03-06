import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import CategoryTemplateDetails from '../components/CategoryTemplateDetails'
import { getSiteInfo } from '../utils/kontentItemNodeUtils'

class CategoryTemplate extends React.Component {
  render() {
    let categoryTemplateData = this.props;
    categoryTemplateData.data.site = getSiteInfo(categoryTemplateData.data.kontentItemMenu, categoryTemplateData.data.kontentItemAuthor, categoryTemplateData.data.kontentItemSiteMetadata);

    const { title } = categoryTemplateData.data.site.siteMetadata
    const { category } = categoryTemplateData.pageContext

    return (
      <Layout>
        <div>
          <Helmet title={`${category} - ${title}`} />
          <Sidebar {...categoryTemplateData} />
          <CategoryTemplateDetails {...categoryTemplateData} />
        </div>
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    kontentItemSiteMetadata(system: {codename: {eq: "site_metadata"}}) {
      elements {
        copyright {
          value
        }
        subtitle {
          value
        }
        title {
          value
        }
      }
    }
    kontentItemMenu(system: {codename: {eq: "navigation_menu"}}) {
      elements {
        menu_items {
          linked_items {
            ... on KontentItemMenuItem {
              id
              elements {
                label {
                  value
                }
                path {
                  value
                }
              }
            }
          }
        }
      }
    }
    kontentItemAuthor(system: {codename: {eq: "author"}}) {
      elements {
        email {
          value
        }
        github {
          value
        }
        name {
          value
        }
        rss {
          value
        }
        telegram {
          value
        }
        twitter {
          value
        }
        vk {
          value
        }
        avatar_image {
          value {
            url
          }
        }
      }
    }
    allKontentItemArticle(filter: {elements: {category: {itemCodenames: {eq: $category}}}}) {
      nodes {
        elements {
          category {
            linked_items {
              ... on KontentItemCategory {
                elements {
                  title {
                    value
                  }
                  slug {
                    value
                  }
                }
              }
            }
          }
          date {
            value
          }
          description {
            value
          }
          content {
            resolvedData {
              html
            }
          }
          slug {
            value
          }
          tags {
            linked_items {
              ... on KontentItemTag {
                elements {
                  title {
                    value
                  }
                }
              }
            }
          }
          title {
            value
          }
        }
      }
    }
  }
`
