document.addEventListener("DOMContentLoaded", function()
{
    var checkboxes = document.querySelectorAll('.side-bar input[type=checkbox]');
    for(let chk of checkboxes){
        checkToggle(chk);
    }
    console.log('DOMContentLoaded');
    prepareContainer();
    setSelectedMenuLink();
});

window.addEventListener('popstate', (event) => {
    let main = document.getElementById('main');
    main.innerHTML = event.state;
    main.scrollTop = 0;
});

function checkToggle(chk)
{
    let id = chk.id;
    if(localStorage.getItem('collapse_' + id) == true){
        chk.checked = true;
        console.log('toggle3:', id);
        console.log('collapse3: ', localStorage.getItem('collapse_' + id));

        let parent = chk.parentNode.closest('input[type=checkbox]');
        if(parent)
            checkToggle(parent);
    }
}

function toggleCollapse(event){
    let id = event.target.id;
    let chk = event.target;
    console.log('chk.id: ', chk.id);
    console.log('chk.checked: ', chk.checked);
    localStorage.setItem('collapse_' + id, chk.checked ? 1 : 0);

    // close any below this one if checked
    if(event.target.checked == false){
        for(let sub of chk.querySelectorAll('input[type=checkbox]')){
            if(sub.checked)
                toggleCollapse(sub);
        }
    }
}

function addCopyCodeButton(container){
    if(!container)
        container = document;
    var cb = container.querySelectorAll('.highlighter-rouge');
    for(let item of cb)
    {
        let ele = document.createElement('div');
        ele.className = 'copy-code';
        item.appendChild(ele);
        ele.addEventListener('click', function() {

            let pre = item.querySelector('pre').innerText;
            navigator.clipboard.writeText(pre);
            ele.className = 'copy-code copied';
            setTimeout(() => {
                ele.className = 'copy-code';
            }, 2000);
        });
    }
}

async function navigateTo(url){
    if(url === '/api-help')
    {
        window.location = url;
        return;
    }
    try
    {
        setSelectedMenuLink(url);
        const resp = await fetch(url);
        let html = await resp.text();
        let title = /<h1>(.*?)<\/h1>/gs.exec(html)[1];
        html = /<!-- content start -->(.*?)<!-- content end -->/gs.exec(html)[1];
        let main = document.getElementById('main');
        let previous = main.innerHTML;
        main.innerHTML = html;
        main.scrollTop = 0;
        window.history.pushState(previous, title, url);
        prepareContainer(main);
    }
    catch(err) 
    {
        window.location = url;
    }
}

function captureLinks(container) {
    if(!container)
        container = document;
    var links = container.querySelectorAll('a');
    for(let a of links) 
    {
        if(a.closest('.toc')){
            a.addEventListener('click', function(event) {
                event.stopPropagation();
                event.preventDefault();
                tocLink(a.href);
            });
            continue;   
        }
        if(!a.href || (a.href.startsWith('http') && a.href.indexOf('docs.fileflows.com') < 0))
            continue;
        a.addEventListener('click', function(event) {
            event.stopPropagation();
            event.preventDefault();
            navigateTo(a.href);
        });
    }
}

function prepareContainer(container){
    addCopyCodeButton(container);    
    captureLinks(container);
}

function setSelectedMenuLink(url) {
    console.log('setSelectedMenuLink', url);
    if(!url)
    {
        url = /(http(s)?:\/\/)([^\?&]+)($|\?)/.exec(window.location.href)[3];
        if(!url)
            return;
    }
    url = url.toLowerCase();
    console.log('setSelectedMenuLink2', url);

    var links = Array.prototype.slice.call(document.querySelectorAll('.side-bar a'), 0);
    links.sort((a,b) => {
        if(!b.href || !a.href)
            return 0;
        return b.href.length - a.href.length;
    });
    let found = false;
    for(let a of links){
        if(!a.href)
            continue;
        let ahref = /http(s)?:\/\/[^\/]+\/(.*?)$/.exec(a.href)[2];
        if(!ahref)
            continue;
        let li = a.closest('li');
        li.classList.remove('selected');
        if(!found && url.indexOf(ahref.toLowerCase()) >= 0){
            console.log('selected page found!', a, li);
            li.classList.add('selected');
            found = true;
        }
    }
}

function tocLink(href){
    if(!href)
        return;
    href = href.substring(href.lastIndexOf('#') + 1);
    let ele = document.getElementById(href);
    if(!ele)
        return;
    ele.scrollIntoView({behavior: "smooth", inline: "nearest"});

}