import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'

import 'react-lazy-load-image-component/src/effects/blur.css'

import me from '../img/me.jpg'
import twitterProject from '../img/twitterclone.png'

import axios from '../img/axios.png'
import css from '../img/css.png'
import html from '../img/html.png'
import django from '../img/django.png'
import express from '../img/express.png'
import git from '../img/git.png'
import graphql from '../img/graphql.png'
import mongodb from '../img/mongodb.png'
import mongoose from '../img/mongoose.png'
import mysql from '../img/mysql.png'
import nextjs from '../img/next.png'
import nodejs from '../img/nodejs.png'
import prisma from '../img/prisma.png'
import python from '../img/python.png'
import reactjs from '../img/reactjs.png'
import reactquery from '../img/reactquery.png'
import redux from '../img/redux.png'
import tailwind from '../img/tailwind.png'
import typescript from '../img/typescript.png'
import zustand from '../img/zustand.webp'

import AMA from '../img/ama.png'
import dict from '../img/dict.png'
import tup from '../img/tup.png'

const Home = () => {
	return (
		<div className="max-width">
			<div className="main-bg">
				<div className="margin">
					<div className="header">
						<div className="header-intro">
							<p>HEY THERE!</p>
							<h1>I'm Ernst Legaspi</h1>
							<p>Good day, I am Ernst Legaspi. I have 3 years personal experience and 1 year of work experience in web development using different full stack technologies, I am eager to contribute my skills to your dynamic team and assist in developing cutting-edge applications.</p>
							<div className="socials">
								<a href="https://www.linkedin.com/in/er
								nst-danielle-legaspi-259547170/" target="_blank"><AiFillGithub size={20} /></a>
								<a href="https://github.com/ernstlegaspi" target="_blank"><AiFillLinkedin size={20} /></a>
								<a href="mailto:legapsiernstdanielle@gmail.com"><HiMail size={24} /></a>
							</div>
						</div>
						<div className="header-image">
							<LazyLoadImage effect="blur" src={me} alt="Ernst Legaspi" />
						</div>
					</div>
					<div className="projects">
						<h2>Recent Projects</h2>
						<div className="p-row">
							<div className="project">
								<LazyLoadImage effect="blur" className="project-image" alt="Twitter Clone Project" src={twitterProject} />
								<div className="overlay">
									<p>View project</p>
								</div>
							</div>
						</div>
					</div>
					<div className="stacks">
						<h2>Stacks I know</h2>
						<p className="s-sub-title">Programming Languages / Databases / Others</p>
						<div className="s-row">
							<div className="stack">
								<LazyLoadImage effect="blur" src={reactjs} width={20} height={20} />
								<p>React.js</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={nodejs} width={25} height={25} />
								<p>Node.js</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={express} width={20} height={20} />
								<p>Express.js</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={nextjs} width={20} height={20} />
								<p>Next.js</p>
							</div>
						</div>
						<div className="s-row">
							<div className="stack">
								<LazyLoadImage effect="blur" src={mongodb} width={20} height={20} />
								<p>MongoDB</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={mysql} width={40} height={20} />
								<p>MySQL</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={python} width={15} height={15} />
								<p>Python</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={django} width={15} height={15} />
								<p>Django</p>
							</div>
						</div>
						<div className="s-row">
							<div className="stack">
								<LazyLoadImage effect="blur" src={reactquery} width={15} height={15} />
								<p>React Query</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={zustand} width={50} height={20} />
								<p>Zustand</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={axios} width={20} height={20} />
								<p>Axios</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={redux} width={20} height={20} />
								<p>Redux</p>
							</div>
						</div>
						<div className="s-row">
							<div className="stack">
								<LazyLoadImage effect="blur" src={html} width={15} height={15} />
								<p>HTML</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={css} width={20} height={20} />
								<p>CSS</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={tailwind} width={30} height={15} />
								<p>TailwindCSS</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={typescript} width={15} height={15} />
								<p>Typescript</p>
							</div>
						</div>
						<div className="s-row">
							<div className="stack">
								<LazyLoadImage effect="blur" src={graphql} width={15} height={15} />
								<p>GraphQL</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={prisma} width={20} height={20} />
								<p>Prisma</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={mongoose} width={50} height={20} />
								<p>Mongoose</p>
							</div>
							<div className="stack">
								<LazyLoadImage effect="blur" src={git} width={15} height={15} />
								<p>Git</p>
							</div>
						</div>
					</div>
					<div className="education">
						<h2>Education</h2>
						<div className="schools">
							<div className="school">
								<LazyLoadImage className="education-image" effect="blur" src={tup} width={100} height={100} />
								<p className="school-name">Technological University of the Philippines</p>
								<p className="school-course">Bachelor of Science in Computer Science</p>
								<p className="date">2019 - 2023</p>
							</div>
							<div className="school">
								<LazyLoadImage className="education-image" effect="blur" src={dict} width={100} height={100} />
								<p className="school-name">Department of Information and Communications 
									Technology – Philippines</p>
								<p className="school-course">Software Engineering</p>
								<p className="date">2018 - 2018</p>
							</div>
							<div className="school">
								<LazyLoadImage className="education-image" effect="blur" src={AMA} width={100} height={100} />
								<p className="school-name">AMA Computer College</p>
								<p className="school-course">Computer Programming</p>
								<p className="date">2016 - 2018</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home