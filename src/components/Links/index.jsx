import React from 'react'
import './style.scss'
import '../../assets/fonts/fontello-771c82e0/css/fontello.css'

class Links extends React.Component {
  render() {
    const author = this.props.data
    const links = {
      twitter: author.elements.twitter.value,
      // rss: author.elements.rss.value,
      email: author.elements.email.value
    }

    return (
      <div className="links">
        {/* <ul className="links__list">
          <li className="links__list-item" data-kontent-element-codename="twitter"> */}
            <a
              href={`https://www.twitter.com/${links.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-twitter" />
            </a>
          {/* </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item" data-kontent-element-codename="email"> */}
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          {/* </li>
        </ul> */}
      </div>
    )
  }
}

export default Links
