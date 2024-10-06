# exoplanet.exe
exoplanet.exe repo for NASA Space Apps Challenge 2024

# EXOPLANET.EXE

For our project, we developed the Eclipse Learning Platform, a freely accessible web application designed for an educational purpose for students to learn about exoplanets. The challenge presented was to create educational materials that would engage and inform students about exoplanets, especially for those with limited resources. Our platform addresses this challenge by offering a wide range of interactive lessons, games, and educational tools. It is important because it makes education accessible to all students as long as they have internet access. By combining creative content with interactive tools, we help foster curiosity and understanding of planetary systems, inspiring the next generation of space explorers while making education more equitable. Future goals include expanding the platform by integrating NASA APIs for continuously updating learning materials according to real-time data, enhancing gaming elements, and providing login features to better track progress and engage users in a more personalized way.

## Component Diagram
![Component Diagram](src\assets\eclipse-component-diagram.png)

## Project Description

Our website is mainly catered towards a middle-school student audience, however, we do think it’s suitable for other eager and interested audiences in exoplanets. It’s an interactive educational website resource to introduce exoplanets and/or further build upon existing knowledge. We’re providing three levels of education: beginner, intermediate, and advanced; each of these respective levels will contain lessons and related educational games. Currently, our website has the intermediate level implemented, with one example lesson and functional games for 4 out of the 5 lessons. 

When visiting our website you should be immediately directed to the home page where you’re presented with the education levels. For now the only option that works is the intermediate level that once it has been accessed you are brought to the main page for the intermediate level. It consists of 5 lessons that have buttons to redirect the user to the lesson as well as the game built specifically for that lesson. The games we’ve constructed are: ‘planet or celebrity baby name’, true or false, multiple choice quiz, and a memory card game. 

By creating and adapting the information into interactive games, we’ve made the process of learning all about exoplanets to be more engaging and introduce a sense of excitement for students. This was further built upon with our interactive and bright design choices.

Due to the given time constraints we weren’t able to achieve everything we set out to do. A main focus of Eclipse is accessibility, which we wanted to promote even more in a few different ways. We’d hope to provide printable versions of our games so that schools or locations that may not have as easy access to the Internet could still utilize them. Another aspect we considered was including more learning aid to the games and lessons, such as providing audio to read aloud the lessons and/or games. Overall we hope to help students and users who are interested in the subject to establish a strong foundational knowledge and understanding of exoplanets, thus allowing them to pursue more resources relating to the subject and be able to understand it better. 


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Needed Installations

* vue <-- latest version, 3
* nodejs
