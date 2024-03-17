
function about()
{
    var about_link = document.getElementById('about_link');
    var qualification_link = document.getElementById('qualification_link');
    var projects_link = document.getElementById('projects_link');
    var contact_link = document.getElementById('contact_link');
    about_link.classList.add("selected");
    qualification_link.classList.remove("selected");
    projects_link.classList.remove("selected");
    contact_link.classList.remove("selected");

    var about = document.getElementById('about');
    var qualification = document.getElementById('qualification');
    var projects = document.getElementById('projects');
    var contact = document.getElementById('contact');
    about.style.display = "block";
    qualification.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
}
function qualification()
{
    var about_link = document.getElementById('about_link');
    var qualification_link = document.getElementById('qualification_link');
    var projects_link = document.getElementById('projects_link');
    var contact_link = document.getElementById('contact_link');
    about_link.classList.remove("selected");
    qualification_link.classList.add("selected");
    projects_link.classList.remove("selected");
    contact_link.classList.remove("selected");

    var about = document.getElementById('about');
    var qualification = document.getElementById('qualification');
    var projects = document.getElementById('projects');
    var contact = document.getElementById('contact');
    about.style.display = "none";
    qualification.style.display = "block";
    projects.style.display = "none";
    contact.style.display = "none";

}
function projects()
{
    var about_link = document.getElementById('about_link');
    var qualification_link = document.getElementById('qualification_link');
    var projects_link = document.getElementById('projects_link');
    var contact_link = document.getElementById('contact_link');
    about_link.classList.remove("selected");
    qualification_link.classList.remove("selected");
    projects_link.classList.add("selected");
    contact_link.classList.remove("selected");

    var about = document.getElementById('about');
    var qualification = document.getElementById('qualification');
    var projects = document.getElementById('projects');
    var contact = document.getElementById('contact');
    about.style.display = "none";
    qualification.style.display = "none";
    projects.style.display = "block";
    contact.style.display = "none";
    
}
function contact()
{
    var about_link = document.getElementById('about_link');
    var qualification_link = document.getElementById('qualification_link');
    var projects_link = document.getElementById('projects_link');
    var contact_link = document.getElementById('contact_link');
    about_link.classList.remove("selected");
    qualification_link.classList.remove("selected");
    projects_link.classList.remove("selected");
    contact_link.classList.add("selected");

    var about = document.getElementById('about');
    var qualification = document.getElementById('qualification');
    var projects = document.getElementById('projects');
    var contact = document.getElementById('contact');
    about.style.display = "none";
    qualification.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "block";

}