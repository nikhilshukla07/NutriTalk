





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
"Stress Management",
"SLEEP DISORDER",
"SKIN IMPROVEMENT",
"SCHOOL GOING CHILDREN WEIGHT MAINTAIN",
"PRE-WEDDING",
"PRE PREGNANCY",
"POST PREGNANCY",
"OLD AGE WEIGHT MAINTAIN",
"MENOPAUSE MANAGEMENT",
"MAINTENANCE",
"LIPID PROFILE MANAGEMENT",
"KIDS NOURISH",
"KIDNEY STONES",
"JOIN PAIN",
"INFERTILITY",
"HEART DISEASE MANAGEMENT",
"ENERGY BOOSTER",
"DIGESTIVE DISORDER",
"DIABETES",
"CLIEAC DISEASE MANAGEMENT",
"BODY BUILDING",
"AGGRESSION",
"ADOLESCENTS WEIGHT MANAGEMENT",
"ACIDITY"];
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


