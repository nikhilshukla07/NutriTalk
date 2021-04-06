serviceImages=['assets\\img\\Weight_Loss.png', 
'assets\\img\\Weight_Gain.png', 
'assets\\img\\THERAPEUTIC.png', 
'assets\\img\\Stress_Management.png', 
'assets\\img\\Sleep_Disorder.png', 
'assets\\img\\Skin_Improvement.png', 
'assets\\img\\School_going_children_weight_maintain.png', 
'assets\\img\\PRE-WEDDING.png', 
'assets\\img\\Pre_Pregnancy.png', 
'assets\\img\\Post_Pregnancy.png', 
'assets\\img\\Old_age_weight_maintain.png', 
'assets\\img\\Menopause_Management.png', 
'assets\\img\\MAINTENANCE.png', 
'assets\\img\\Lipid_profile_management.png', 
'assets\\img\\KIDS_NOURISH.png', 
'assets\\img\\Kidney_stones.png', 
'assets\\img\\Join_Pain.png', 
'assets\\img\\Infertility.png', 
'assets\\img\\Heart_Disease_management.png', 
'assets\\img\\Energy_Booster.png', 
'assets\\img\\Digestive_Disorder.png', 
'assets\\img\\Diabetes.png', 
'assets\\img\\Clieac_Disease_management.png', 
'assets\\img\\BODY_BUILDING.png', 
'assets\\img\\Aggression.png', 
'assets\\img\\Adolescents_weight_management.png', 
'assets\\img\\Acidity.png'];

serviceNames=["Weight Loss Nutrition Therapy",
"Weight Gain Nutritional Consultancy",
"Therapeutic Lifestyle Changes",
"Stress integrative nutrition therapy",
"Sleep disorder nutrition therapy",
"Nutrition therapy for skin care",
"Child nutrition consultancy",
"Wedding Nutrition Advice to Look Good",
"Pregnancy nutrition counselling",
"Post pregnancy nutrition consultancy",
"Nutrition counselling for the elderly",
"Lifestyle changes for menopause",
"Medical nutrition therapy and lifestyle intervention",
"Lifestyle modification for lipid disorders",
"Nutrition advice for school aged children",
"Nutrition management of kidney stones",
"Lifestyle changes to manage arthitis pain",
"Infertility nutrition therapy",
"Nutrition therapy for cardiovascular disease prevention",
"Lifestyle modification to boost energy level",
"Nutrition guidance for IBS and digestion issue",
"Diabetes medical nutrition therapy",
"Nutrition management of celiac disease",
"Body building transformation guide",
"Aggresion management nutrition advice",
"Lifestyle management for adolescents",
"Nutritoin consultancy to acid reflux"];
var n=12;
function loadServices(n){
    document.querySelector(".services").innerHTML="";

    for(var i=0;i<n;i++)
    {
        var e=document.createElement('div');
        e.classList.add("col-sm-4");
        e.classList.add("col-6");
        e.classList.add("col-lg-2");
        e.classList.add("col-md-2");
        e.classList.add('text-center');
        var imga=document.createElement('a');
        imga.href="https://www.google.com";
        imga.style="text-decoration:none; color:black;";
        imga.classList.add('servicelinks');
        imga.target="blank";
        e.appendChild(imga);
        var eimg=document.createElement('img');
        eimg.src=serviceImages[i]
        eimg.classList.add("mobile_images_width")
        eimg.width="120";
        eimg.height="120";
        imga.appendChild(eimg);
        var imgp=document.createElement('p');
        imgp.classList.add('paragraph_text');
        imgp.innerText=serviceNames[i];
        imga.appendChild(imgp);
        document.querySelector(".services").appendChild(e);
    }
}
loadServices(12);
function loadmoreless()
{
    var e=document.querySelector(".loadmore");
    if(e.innerText=="Load more")
    {
        loadServices(27);
        e.innerText="Load less";
    }
    else{
        loadServices(12);
        e.innerText="Load more";
    }
}


