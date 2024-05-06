import React from 'react'
import CListItem from './CListItem';
import dy from './images/diya-3.jpg'
import { NavLink } from 'react-router-dom'



const CategoryList = () => {
  return (
    <div className='categorylist'>
      <div className="categorylist-container">
        <ul>
          <li className='hoverlist'>
            GOLD
            <div className="CListItem-main">
              <div className="CListItem-block">
                <div className="CListItem-img">
                  <img src={dy} alt="" />
                </div>
                {/* <h1>dreasses</h1>
                <p>upto 80% off</p> */}
              </div>
              <div className="CListItem-block2">
                <h6>WOMEN's Item</h6>
                <ul>
                  <li>
                    <NavLink to='/CListItem'>
                      Active
                    </NavLink>
                  </li>
                  <li><a href="/">Active wearn
                  </a></li>
                  <li><a href="/">Active wearn
                  </a></li>
                  <li><a href="/">Active wearn
                  </a></li>
                  <li><a href="/">Active wearn
                  </a></li>
                  <li><a href="/">Active wearn
                  </a></li>
                  <li><a href="/">Active wearn
                  </a></li>
                  <li><a href="/">Active wearn
                  </a></li>
                  <li><a href="/">Active wearn
                  </a></li>
                  <li><a href="/">Active wearn
                  </a></li>
                </ul>
              </div>
              <div className="CListItem-block2">
                <h6>MEN's Item</h6>
                <ul>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                </ul>
              </div>
            </div>
          </li>

          <li>Silver
            <div className="CListItem-main">
              <div className="CListItem-block">
                <div className="CListItem-img">
                  <img src={dy} alt="" />
                </div>
                {/* <h1>dreasses</h1>
                <p>upto 80% off</p> */}
              </div>
              <div className="CListItem-block2">
                <h6>WOMEN's Clothings</h6>
                <ul>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                </ul>
              </div>
              <div className="CListItem-block2">
                <h6>MEN's Clothings</h6>
                <ul>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                </ul>
              </div>
            </div>
          </li>
          <li>Diamond
            <div className="CListItem-main">
              <div className="CListItem-block">
                <div className="CListItem-img">
                  <img src={dy} alt="" />
                </div>
                {/* <h1>dreasses</h1>
                <p>upto 80% off</p> */}
              </div>
              <div className="CListItem-block2">
                <h6>WOMEN's Clothings</h6>
                <ul>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                </ul>
              </div>
              <div className="CListItem-block2">
                <h6>MEN's Clothings</h6>
                <ul>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                </ul>
              </div>
            </div>
          </li>
          <li>Gem's
            <div className="CListItem-main">
              <div className="CListItem-block">
                <div className="CListItem-img">
                  <img src={dy} alt="" />
                </div>
                <h1>dreasses</h1>
                <p>upto 80% off</p>
              </div>
              <div className="CListItem-block2">
                <h6>WOMEN's Clothings</h6>
                <ul>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                </ul>
              </div>
              <div className="CListItem-block2">
                <h6>MEN's Clothings</h6>
                <ul>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                </ul>
              </div>
            </div>
          </li>
          <li>1gm Gold
            <div className="CListItem-main">
              <div className="CListItem-block">
                <div className="CListItem-img">
                  <img src={dy} alt="" />
                </div>
                <h1>dreasses</h1>
                <p>upto 80% off</p>
              </div>
              <div className="CListItem-block2">
                <h6>WOMEN's Clothings</h6>
                <ul>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                </ul>
              </div>
              <div className="CListItem-block2">
                <h6>MEN's Clothings</h6>
                <ul>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                </ul>
              </div>
            </div>
          </li>
          <li>70-72
            <div className="CListItem-main">
              <div className="CListItem-block">
                <div className="CListItem-img">
                  <img src={dy} alt="" />
                </div>
                <h1>dreasses</h1>
                <p>upto 80% off</p>
              </div>
              <div className="CListItem-block2">
                <h6>WOMEN's Clothings</h6>
                <ul>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                </ul>
              </div>
              <div className="CListItem-block2">
                <h6>MEN's Clothings</h6>
                <ul>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                  <li>Active wear</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default CategoryList
