import React, { Component } from 'react';
import MathJax from 'react-mathjax';

class Math extends Component {
  render() {

    return (
      <section id="math">
        <div className="text-container">
          <MathJax.Provider>
            <div className='row'>
              <blockquote>
                Wondering what the homepage graphic means? <br></br>
                It's an example of the <span className='highlight'> First Isomorphism Theorem </span> for groups, which was my favourite theorem learned in MATH 235 (Algebra I) during my first year at McGill (and also happens to be a cool use of my initials).
                <br></br><br></br>
                But first, familiarize yourself with some <a href='http://mathroughguides.wikidot.com/glossary:abstract-algebra'>abstract algebra definitions</a>, particularly for group, homomorphism, isomorphism, normal subgroup, and kernel.
                <br></br><br></br>
                <span className='highlight'> Theorem: (First Isomorphism Theorem). If <MathJax.Node inline formula={` \\psi : G \\rightarrow H `}/> is a group homomorphism with <MathJax.Node inline formula={` K = \\text{ker } \\psi `}/>, 
                then <MathJax.Node inline formula={` K \\text{ is normal in } G `}/>. Let <MathJax.Node inline formula={` \\rho : G \\rightarrow G/K `}/> be the canonical homomorphism.
                Then there exists a unique isomorphism <MathJax.Node inline formula={` G/K \\cong \\psi(G) `}/>; thus, if <MathJax.Node inline formula={` \\psi `}/> is surjective, we have the isomorphism <MathJax.Node inline formula={` G/K \\cong H `}/>.</span> 
                <br></br><br></br>
                Simple, right? (basically directly translate G, H, and K to <MathJax.Node inline formula={` \\mathbb{R}, \\mathbb{T}, \\text{ and } \\mathbb{Z} `}/>.)
                <br></br><br></br>
                In our example, <MathJax.Node inline formula={` \\mathbb{R}, \\mathbb{Z}, \\text{ and } \\mathbb{T} `}/> denote the real numbers, integers, and the <a href='https://en.wikipedia.org/wiki/Circle_group'>circle group </a> (all complex numbers with absolute value 1, i.e. on the unit circle) respectively. 
                The theorem and diagram are basically showing that the quotient group <span className='highlight'> <MathJax.Node inline formula={` \\mathbb{R}/\\mathbb{Z}`}/> is isomorphic to the circle group! </span>
                <br></br><br></br>
                Define the group homomorphism <span className='highlight'> <MathJax.Node inline formula={` \\psi : \\mathbb{R} \\rightarrow \\mathbb{T} `}/> as <MathJax.Node inline formula={` \\psi(x) = e^{2\\pi i x} `}/></span>. 
                Crudely put, every real number x gets mapped to the point on the unit circle that makes an <span className='highlight'> angle of <MathJax.Node inline formula={` 2\\pi x `}/> with the positive x-axis </span>. The kernel of this homomorphism are all real numbers that map to an angle of 0: the integers (so <MathJax.Node inline formula={` K = \\text{ker } \\psi = \\mathbb{Z}`}/>)! 
                Furthermore, this homomorphism is surjective because the entire circle (i.e. every angle) is covered. Hence we have the isomorphism <span className='highlight'><MathJax.Node inline formula={` \\mathbb{R}/\\mathbb{Z} \\cong \\mathbb{T} `}/></span>.
                <br></br><br></br>
                I didn't go too much in depth with explanations and proofs, but for those interested in learning more, click <a href='https://www.math3ma.com/blog/the-first-isomorphism-theorem-intuitively'>here.</a>
              </blockquote>
            </div>
          </MathJax.Provider>
        </div>
      </section>
    );
  }
}

export default Math;
