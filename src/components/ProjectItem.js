import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--border);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--bg-2);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
    color: var(--text-3)
  }
  .projectItem__tech__container{
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 1rem auto;
    flex-wrap: wrap;
  }
  .projectItem__tech{
    font-size: 1.4rem;
    font-family: 'RobotoMono Regular';
    color: var(--btn-text);
    border: solid 1px var(--text-1);
    border-radius: 10px;
    padding: 5px 8px;
    background-color: var(--btn-bg);
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-bottom: 1rem;
  }
  .projectItem__anchor{
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    cursor: pointer;
  }
  .projectItem__anchor:hover{
    color: var(--text-2);
    font-weight: 700;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img,
  title = 'Project Name',
  tech,
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  github,
  demo
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        {/* <p className="projectItem__tech">{tech}</p> */}
        <div className='projectItem__tech__container'>
          {tech ? tech.map((obj, idx)=>{
            return <span key={idx} className='projectItem__tech'>{obj}</span>
          }) : null}
        </div>
        
        <p className="projectItem__desc">{desc}</p>
        <div>
          <a className="projectItem__anchor" href={github} target='_blank'>-GitHub-&nbsp;</a>
          {demo ? <a className="projectItem__anchor" href={demo} target='_blank'>-Demo-</a> : null}
        </div>
      </div>
    </ProjectItemStyles>
  );
}
