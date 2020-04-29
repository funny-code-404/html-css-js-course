import Slider_Auto from './Auto_slider.js';
import Slider_with_nav from './Slider_with_nav.js';
import Slider_without_radio from './Slider_without_radio.js';
import Init_portfolio_home from './Init_portfolio_home.js';
import Init_post_thefox_business from './Init_post_thefox_business.js';
import Init_blog_home from './Init_blog_home.js';
import Init_shop_item from './Init_shop_item.js';
import Init_shop_carousel_item from './Init_shop_carousel_item.js';
import Init_portfolio from './Init_portfolio';
import Init_blog_popular_post from './Init_blog_popular_post.js';
import Init_blog_popular_tags from './Init_blog_popular_tags.js';
import Init_blog_photo_unsplash from './Init_blog_photo_unsplash.js';
import Init_blog_post from './Init_blog_post.js';

function main() {
   if (document.querySelector(`.main_slider-slides`)) {
      const main_slider = new Slider_with_nav(`main_slider-nav_left`, `main_slider-nav_right`, `main_slider-slides`, `main_slider-button`, `main_slider-buttons`);
      main_slider.addListner();
   }
   if (document.querySelector(`.main_parralax-slides`)) {
      const slider_parallax = new Slider_Auto(`main_parralax-slides`, `main_parralax-button`, `main_parralax-buttons`);
      setInterval(() => { slider_parallax.moveSlider() }, 4000);
   };
   if (document.querySelector(`.main_lastest-twitter-slides`)) {
      const slider_twitter = new Slider_Auto(`main_lastest-twitter-slides`, `main_lastest-twitter-button`, `main_lastest-twitter-buttons`);
      setInterval(() => { slider_twitter.moveSlider() }, 4000);
   };
   if (document.querySelector(`.main_carousel-product-slides`)) {
      const product_slider = new Slider_without_radio(`main_carousel-product-nav_left`, `main_carousel-product-nav_right`, `main_carousel-product-slides`, `main_carousel-product_slide`);
      product_slider.addListner();
   }
}

function init(){
   if (window.location.pathname == '/') {
      const post_blog_home_cloud = [
         {
            title: `This CEO is taking on the biggest banks on Wall Street — and
         winning`,
            text: `by Robinson Greig / 25th June 2020`
         },
         {
            title: `Google employee dies in an accident at the Cannes Lions
         advertising festival`,
            text: `by Robinson Greig / 25th June 2020`
         },
         {
            title: `How a tweet turned Uber's first hire into a billionaire`,
            text: `by Robinson Greig / 25th June 2020`
         },
      ]
      const inti_post_blog_home = new Init_blog_home(post_blog_home_cloud);
      inti_post_blog_home.loaderAdd()

      const portfolio_home_cloud = [
         { href: `https://ruseller.com/lessons/les1978/images/01-plain-agency-bw-website.jpg` },
         { href: `https://ruseller.com/lessons/les1978/images/02-crush-studio-manhattan-working.jpg` },
         { href: `https://ruseller.com/lessons/les1978/images/05-menta-picante-grey-homepage.jpg` },
         { href: `https://ruseller.com/lessons/les1978/images/06-smart-groupo-creative-studio.jpg` },
         { href: `https://ruseller.com/lessons/les1978/images/07-my-own-custom-bike-shop-website.jpg` },
         { href: `https://ruseller.com/lessons/les1978/images/08-laurent-perez-del-mar-composer.jpg` },
         { href: `https://ruseller.com/lessons/les1978/images/11-sang-han-portfolio-grey-website.jpg` }
      ]
      const init_picture = new Init_portfolio_home(portfolio_home_cloud)
      init_picture.loaderAdd();
   }

   if (window.location.pathname == '/' || window.location.pathname == '/demos.html') {
      const post_thefox_business_cloud = [
         {
            image: `https://i.pinimg.com/originals/7e/24/68/7e2468fe7c379572dc5d2cadf9dbd20b.jpg`,
            title: `We Think Different. We Do The Best Ever`,
            text: `Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo
         feugiat. Nulla ut enim lobortis orci gravida volutpat.`},
         {
            image: `https://www.zastavki.com/pictures/originals/2015/Backgrounds_Bright_triangle__gray_background_106983_.jpg`,
            title: `We Do What The Customers Desires`,
            text: `Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Vehicula nibh vel ante commodo
         feugiat. Nulla ut enim lobortis orci gravida volutpat.`}
      ]
      const init_post_thefox_business = new Init_post_thefox_business(post_thefox_business_cloud);
      init_post_thefox_business.loaderAdd();
   }

   if (window.location.pathname == '/shop.html') {
      const shop_element_cloud = [
         { link: `https://avatars.mds.yandex.net/get-pdb/2848850/35d833c4-eae0-4795-aefd-c1e2f02543ec/s1200` },
         { link: `http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg` },
         { link: `https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg` },
         { link: `https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg` },
         { link: `https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false` },
         { link: `https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg` },
         { link: `https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg` }
      ]
      const init_shop_elements = new Init_shop_item(shop_element_cloud);
      init_shop_elements.loaderAdd();


      const shop_carousel_element_cloud = [
         { link: `https://avatars.mds.yandex.net/get-pdb/2848850/35d833c4-eae0-4795-aefd-c1e2f02543ec/s1200` },
         { link: `http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg` },
         { link: `https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg` },
         { link: `https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg` },
         { link: `https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false` },
         { link: `https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg` },
         { link: `https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg` },
         { link: `https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg` }
      ];
      const init_shop_carousel = new Init_shop_carousel_item(shop_carousel_element_cloud);
      init_shop_carousel.loaderAdd();
   }

   if (window.location.pathname == '/portfolio.html') {
      const portfolio_element_cloud = [
         { link: `https://avatars.mds.yandex.net/get-pdb/2848850/35d833c4-eae0-4795-aefd-c1e2f02543ec/s1200` },
         { link: `http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg` },
         { link: `https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg` },
         { link: `https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg` },
         { link: `https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false` },
         { link: `https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg` },
         { link: `https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg` },
         { link: `http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg` },
         { link: `https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg` },
         { link: `https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg` },
         { link: `https://avatars.mds.yandex.net/get-pdb/2848850/35d833c4-eae0-4795-aefd-c1e2f02543ec/s1200` },
         { link: `https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false` },
         { link: `https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg` },
         { link: `http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg` },
         { link: `https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg` },
         { link: `https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg` },
         { link: `http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg` },
         { link: `https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg` },
         { link: `https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg` },
         { link: `https://avatars.mds.yandex.net/get-pdb/2848850/35d833c4-eae0-4795-aefd-c1e2f02543ec/s1200` },
         { link: `https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false` },
         { link: `http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg` },
         { link: `https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg` },
         { link: `https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg` },
         { link: `https://avatars.mds.yandex.net/get-pdb/2848850/35d833c4-eae0-4795-aefd-c1e2f02543ec/s1200` },
         { link: `http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg` },
         { link: `https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg` },
         { link: `https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg` }
      ]
      const portfolio = new Init_portfolio(portfolio_element_cloud);
      portfolio.addListner();
   }

   if (window.location.pathname == '/blog.html') {
      const blog_popular_post_cloud = [
         {
            img: `https://avatars.mds.yandex.net/get-pdb/2848850/35d833c4-eae0-4795-aefd-c1e2f02543ec/s1200`,
            title: `Totally Free Photos For Personal And Commercial Use`,
            date: `1 day ago`,
         },
         {
            img: `http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg`,
            title: `Comments tab redesign and Author Response Time`,
            date: `June 28th, 2015`,
         },
         {
            img: `https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            title: `Wallpaper Design Contest #4: Urban - Winner Announced`,
            date: `1 day ago`,
         },
         {
            img: `http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg`,
            title: `Envato's Most Wanted Winners: Micro Niche Themes`,
            date: `June 28th, 2015`,
         },
         {
            img: `https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            title: `Envato's Most Wanted Winners: Micro Niche Themes`,
            date: `June 28th, 2015`,
         }
      ]      
      const blog_popular_post = new Init_blog_popular_post(blog_popular_post_cloud);
      blog_popular_post.loaderAdd();

      const blog_popular_tags_cloud = [
         {
            attr: `Recruitment`
         },
         {
            attr: `Tech`
         },
         {
            attr: `Android`
         },
         {
            attr: `TheFox WordPress`
         },
         {
            attr: `Envato`
         },
         {
            attr: `Themeforest`
         },
         {
            attr: `Art work`
         },
         {
            attr: `Fonts`
         },
         {
            attr: `WordPress Theme`
         },
         {
            attr: `Design`
         }
      ]
      const blog_popular_tags = new Init_blog_popular_tags(blog_popular_tags_cloud);
      blog_popular_tags.loaderAdd();

      const blog_photo_unsplash_cloud = [
         { link: `https://avatars.mds.yandex.net/get-pdb/2848850/35d833c4-eae0-4795-aefd-c1e2f02543ec/s1200` },
         { link: `http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg` },
         { link: `https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg` },
         { link: `https://avatars.mds.yandex.net/get-pdb/2848850/35d833c4-eae0-4795-aefd-c1e2f02543ec/s1200` },
         { link: `https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false` },
         { link: `https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg` },
         { link: `https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg` },
         { link: `https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg` },
         { link: `https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false` }
      ];
      const blog_photo_unsplash = new Init_blog_photo_unsplash(blog_photo_unsplash_cloud);
      blog_photo_unsplash.loaderAdd();

      const blog_post_cloud = [
         {
            avatar:`https://avatars.mds.yandex.net/get-pdb/2848850/35d833c4-eae0-4795-aefd-c1e2f02543ec/s1200`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg`,
            title:`11 Impossible Tech Interview Questions You Don't Want To
            Be Asked`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://avatars.mds.yandex.net/get-pdb/2848850/35d833c4-eae0-4795-aefd-c1e2f02543ec/s1200`,
            title:`The World's First Commercial Jetpack Will Arrive In
            2016, And It'll Cost You $150,000`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg`,
            title:`11 Impossible Tech Interview Questions You Don't Want To
            Be Asked`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg`,
            title:`People Are Tweeting Their Rage At Scalia - But They're
            Making One Crucial Mistake`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            title:`How E-Commerce Is Finally Disrupting The $600
            Billion-A-Year Grocery Industry`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            title:`How E-Commerce Is Finally Disrupting The $600
            Billion-A-Year Grocery Industry`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg`,
            title:`People Are Tweeting Their Rage At Scalia - But They're
            Making One Crucial Mistake`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg`,
            title:`11 Impossible Tech Interview Questions You Don't Want To
            Be Asked`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg`,
            title:`11 Impossible Tech Interview Questions You Don't Want To
            Be Asked`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            title:`How E-Commerce Is Finally Disrupting The $600
            Billion-A-Year Grocery Industry`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg`,
            title:`11 Impossible Tech Interview Questions You Don't Want To
            Be Asked`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://avatars.mds.yandex.net/get-pdb/2848850/35d833c4-eae0-4795-aefd-c1e2f02543ec/s1200`,
            title:`The World's First Commercial Jetpack Will Arrive In
            2016, And It'll Cost You $150,000`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg`,
            title:`11 Impossible Tech Interview Questions You Don't Want To
            Be Asked`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg`,
            title:`People Are Tweeting Their Rage At Scalia - But They're
            Making One Crucial Mistake`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            title:`How E-Commerce Is Finally Disrupting The $600
            Billion-A-Year Grocery Industry`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            title:`How E-Commerce Is Finally Disrupting The $600
            Billion-A-Year Grocery Industry`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg`,
            title:`People Are Tweeting Their Rage At Scalia - But They're
            Making One Crucial Mistake`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg`,
            title:`11 Impossible Tech Interview Questions You Don't Want To
            Be Asked`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg`,
            title:`11 Impossible Tech Interview Questions You Don't Want To
            Be Asked`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            title:`How E-Commerce Is Finally Disrupting The $600
            Billion-A-Year Grocery Industry`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            title:`How E-Commerce Is Finally Disrupting The $600
            Billion-A-Year Grocery Industry`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg`,
            title:`People Are Tweeting Their Rage At Scalia - But They're
            Making One Crucial Mistake`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://img3.goodfon.ru/original/1280x1024/1/30/minimalizm-vektor-seryy-luna.jpg`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`http://ruwallpapers.ru/wallpapers/abstraction/746_abstraction_1920x1080.jpg`,
            title:`11 Impossible Tech Interview Questions You Don't Want To
            Be Asked`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://w-dog.ru/wallpapers/13/4/326947321151487/derevo-velosiped-fon.jpg`,
            title:`11 Impossible Tech Interview Questions You Don't Want To
            Be Asked`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         },
         {
            avatar:`https://avatars.mds.yandex.net/get-pdb/1549628/16c505d1-e8a5-484b-b007-df1ae1d0160d/s1200?webp=false`,
            author:`Brian Alvarado`,
            date:`1 day ago`,
            image:`https://get.wallhere.com/photo/2560x1440-px-abstract-gray-triangle-white-1435117.jpg`,
            title:`How E-Commerce Is Finally Disrupting The $600
            Billion-A-Year Grocery Industry`,
            text:`Cras gravida arcu tincidunt, suscipit velit sed, porta
            sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex
            fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.`,
         }
      ]
      const blog_post = new Init_blog_post(blog_post_cloud);
      blog_post.loaderAdd();
   }   
}

window.onload = function () {
   init();
   main();
}