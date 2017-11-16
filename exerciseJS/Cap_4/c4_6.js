var curs = new Object();

// curs.tile = "Java Script";
// curs.instructor = "Morten";
// curs.level = 1;
// curs.published = true;
// curs.views = 0;
 var curs = {
   title:"Java Script",
   instructor:"Morten",
   level: 1,
   published: true,
   views: 0,
   updateViews: function () {
     return ++curs.views;
   }

 }

// console.log(curs.views);
// curs.updateViews();
// console.log(curs.views);
console.log(curs);
