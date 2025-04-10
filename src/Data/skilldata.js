import React from 'react'
import htmlic from '../SKILL ICON/html-5.png';
import Reactic from '../SKILL ICON/react-js-icon.png';
import Cssic from '../SKILL ICON/social.png';
import jsic from '../SKILL ICON/js.png';
import tailwindic from '../SKILL ICON/tailwind-css-icon.png';
import github from '../SKILL ICON/github-6980894_640.png';
import nodejs from '../SKILL ICON/icons8-nodejs-48.png';
import mongo from '../SKILL ICON/MongoDB.png';
import express from '../SKILL ICON/icons8-express-js-64.png';
import api from '../SKILL ICON/cloud-api.png';
import project1 from '../PERSONAL IMG/Screenshot (3) - Copy.png'
import project2 from '../PERSONAL IMG/Screenshot 2025-04-08 192711.png'
import project3 from '../PERSONAL IMG/ecomerce.png'


let skilldata=[
     {
       id:1,
       skillimage:htmlic,
       skillname:"HTML"
     }

     ,
     {
        id:2,
        skillimage:Reactic,
        skillname:"React Js"
      }
      ,
      {
        id:3,
        skillimage:jsic,
        skillname:"Javascript"
      }
      ,
      {
        id:4,
        skillimage:Cssic,
        skillname:"CSS"
      }
      ,
      {
        id:5,
        skillimage:tailwindic,
        skillname:"Tailwind Css"
      }
      ,
      {
        id:6,
        skillimage:express,
        skillname:"Express"
      }
      ,
      {
        id:7,
        skillimage:nodejs,
        skillname:"Node Js"
      }

      ,
      {
        id:8,
        skillimage:mongo,
        skillname:"Mongo Db"
      }


      ,
      {
        id:9,
        skillimage:github,
        skillname:"Github"
      }

      ,
      {
        id:10,
        skillimage:api,
        skillname:"Api"
      }
]

export let projectinfo=[

    {
            projecttitle:"Man Fasion Ecommerce",
            projectimg:project3,
            projectdesc:"Man Fasion Ecommerce Website Built Using React Js And Hook And Data Management For Using",
            view:"https://fahath19.github.io/ecom/",
            code:"https://github.com/fahath19/ECOMMERCE"

    },
    {
        projecttitle:"Snackify",
        projectimg:project1,
        projectdesc:"Snackify Website Built Using React Js And Hook And Data Management For Using"
        ,
            view:"https://snackify.netlify.app/",
            code:"https://github.com/fahath19/Foodapp"
},
{
    projecttitle:"Todo List",
    projectimg:project2,
    projectdesc:"Todo List Ecommerce Website Built Using React Js And Hook And Data Management For Using"
    ,
            view:"https://github.com/fahath19/Reactsocialmedia",
            code:"https://fahath19.github.io/Reactsocialmedia/"
}
]
export default  skilldata;
