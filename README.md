# "Emoji" Meme Search App

Yeh project ek simple React + Tailwind CSS web application hai jisme user meme-type images search kar sakta hai.  

API se saara data pehle fetch ho jata hai, aur phir search keyword ke hisaab se filter karke cards ke form me dikhaya jata hai. 

UI bhi kaafi simple aur basic rakha gaya hai jaise assignment ya practical exam me hota hai.


# Features

- Search bar jisme user koi bhi keyword daal sakta hai  
- Search ke baad filtered results card layout me show hote hain  
- Tailwind CSS se basic responsive UI  
- Vercel par deployment kiya gaya hai  
- Simple gradient background as diricted in video  
- Data filtering React ke andar hi hoti hai, API ko baar-baar hit nahi karna padta


## API Used

Project me yeh API use ki gayi hai:
https://api.imgflip.com/get_memes


Yeh API saare meme templates ek saath de deti hai.  
Search functionality React me keyword ke base par filtering karke banayi gayi hai.


## Technologies Used

- React JS (Create React App)
- Tailwind CSS v3
- JavaScript (ES6)
- Vercel Deployment


## How to Run Locally

1. Repository clone karo:

https://github.com/apranshyadav/Web_Paper


2. Project folder me jao:

cd Web_Paper/emoji-search


3. Dependencies install karo:

npm install


4. Development server start karo:

npm start


Application yahan open hogi:  
`http://localhost:3000`


# Tailwind Setup 

`index.css` me:

css
@tailwind base;
@tailwind components;
@tailwind utilities;

# How Search Works

1. Page load hote hi API call hoti hai aur saare memes fetch ho jaate hain

2. User search input me text type karta hai

3. Search button dabate hi list filter ho jaati hai

4. Agar koi matching meme nahi milta, to "No results found" message show hota hai

5. Filtering sirf name property ke base par hoti hai



# Deployment (Vercel)

Project ko Vercel par deploy kiya gaya hai.
Kyuki React app ek subfolder me tha (emoji-search), isliye Root Directory set karna zaroori tha.

Vercel ke settings:

Root Directory: emoji-search
Build Command:npm run build
Output Directory:build



Author

Apransh Yadav
React + Tailwind Web Paper Project