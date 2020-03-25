// add branch 

var branchContainer = [];

function addBranch () {
    var nameCust = document.getElementById("nameCust").value;
    var adressCust = document.getElementById("adress").value;
    var phoneCust = document.getElementById("phone").value;

    branch = {
        name: nameCust,
        adress: adressCust,
        phone: phoneCust
    }

    branchContainer.push(branch);

    displayBranch ();
};


function displayBranch () {
    bemp = ``;
    for (let r = 0; r < branchContainer.length; r++)
    {
        bemp += `
                <tr>
                    <td scope="row">${branchContainer[r].name}</td>
                    <td>${branchContainer[r].adress}</td>
                    <td>${branchContainer[r].phone}</td>
                    <td>
                    <button class="btn btn-primary" onclick="deletBranch(${r})">حذف</button>
                        <button class="btn btn-danger">تعديل</button>        
                    </td>
                </tr>
                `
    }

    document.getElementById('bo-card').innerHTML = bemp;
};


function searchBranch (term) {
    bemp = ``;
    for (let r = 0; r < branchContainer.length; r++)
    {
        if (branchContainer[r].name.toLowerCase().includes(term.toLowerCase())) {
            bemp += `
            <tr>
                <td scope="row">${branchContainer[r].name}</td>
                <td>${branchContainer[r].adress}</td>
                <td>${branchContainer[r].phone}</td>
                <td>
                    <button class="btn btn-primary" onclick="deletBranch(${r})">delet</button>
                    <button class="btn btn-danger">تعديل</button>        
                </td>
            </tr>
            `

        }  
    }

    document.getElementById('bo-card').innerHTML = bemp;
};


function deletBranch (index) {
    branchContainer.splice(index, 1);
    displayBranch ();
    searchBranch ()
    
}



//// jquery 


$('document').ready(function()
{

    // show welcome screen
    $(".image").fadeIn(1500,function(){
        $(".btn").fadeIn(1500);
    }),
    

    //hidden welcome screen

    $('.join').click(function () { 
        $(".cont").fadeOut(1000);
        $("#signIn").fadeIn(1000);
    });

    $('.head-login a').click(function(e) {
        e.preventDefault();
        $(this).addClass('selection').siblings().removeClass('selection');

    });

    $('.log').click(function(){
        $('.logIn').fadeIn(500);
        $('.regester').fadeOut(500)
    });
    $('.sign').click(function(){
        $('.regester').fadeIn(500);
        $('.logIn').fadeOut(500)
    });

    //show sidebar

    $('.fa-bars').click(function() {

        let slidWidth = $('.sidebar-left').outerWidth(true);

        if ($('.sidebar-left').css('right') == '0px') {
            $('.sidebar-left').animate({right:`-${slidWidth}px`},500)
        }else {
            $('.sidebar-left').animate({right:'0'},500)
        }

        $('.content').toggleClass('addWidth');
    });    

});


