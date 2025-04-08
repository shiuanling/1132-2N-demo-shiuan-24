'use client';

import { FaGlobe } from 'react-icons/fa6'
import { FaMugSaucer } from 'react-icons/fa6'

import Wrapper from '@/styles/wrappers/Blog_xx'

export default function P2Page_24() {
    return (
        <Wrapper>
          <section className='blogs'>
            <div className='section-title'>
              <h2>Static blogs -- Hsingtai Chung, 123456789</h2>
            </div>
            <div className='blogs-center'>
              <article className='blog'>
                <img
                  src='/demo/blog_24/photo-1.jpg'
                  alt='Coffee photo'
                  className='img blog-img'
                />
                <div className='blog-content'>
                  <span>
                    lifestyle <FaMugSaucer />
                  </span>
                  <h3>seven reasons why coffee is awesome</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  <a href='#'>read more</a>
                </div>
              </article>
              <article className='blog'>
                <img
                  src='/demo/blog_24/photo-2.jpg'
                  alt='Coffee photo'
                  className='img blog-img'
                />
                <div className='blog-content'>
                  <span>
                    travel <FaGlobe />
                  </span>
                  <h3>travel to paris</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  <a href='#'>read more</a>
                </div>
              </article>
              <article className='blog'>
                <img
                  src='/demo/blog_24/photo-3.jpg'
                  alt='Coffee photo'
                  className='img blog-img'
                />
                <div className='blog-content'>
                  <span>
                    lifestyle <FaMugSaucer />
                  </span>
                  <h3>seven reasons why coffee is awesome</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  <a href='#'>read more</a>
                </div>
              </article>
              <article className='blog'>
                <img
                  src='/demo/blog_24/photo-4.jpg'
                  alt='Coffee photo'
                  className='img blog-img'
                />
                <div className='blog-content'>
                  <span>
                    lifestyle <FaMugSaucer />
                  </span>
                  <h3>seven reasons why coffee is awesome</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  <a href='#'>read more</a>
                </div>
              </article>
            </div>
          </section>
        </Wrapper>
      )
}