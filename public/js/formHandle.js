
'use-strict';

// declaration

const signup = document.querySelector('#signup');
const resetToken  = document.querySelector('#reset');
const signIn = document.querySelector('#signIn');
const updateBtn = document.querySelector('.btn-save');
const searchBtn = document.querySelector('.searchUser');
const flwParent = document.querySelector('#flw-delg');
const followers = document.querySelector('.followers');
const postForm = document.querySelector('#post-form');
const sendBtn = document.querySelector('.btn-send');
const notifBtn = document.querySelectorAll('.notif-btn');



function update_user(){


    let fullname = document.querySelector('[name="fullname"]');
    let username =  document.querySelector('[name="username"]');
    let bio =  document.querySelector('[name="bio"]');

    let data = {fullname:fullname.value,username:username.value,bio:bio.value};

    $.ajax({
        method : 'POST',
        data :   data,
        dataType : 'json',

        beforeSend : function(){
            document.querySelector('.btn-save').style.opacity = "0.7";
        },

        success : function(response){

            let message = response.msg,
                success = response.success,
                html;

            if(success) {

                html =  `<div class="alert alert-success " role="alert">
                      ${message}
                    </div>`;
                document.querySelector("#updateForm .lead").textContent = bio.value;
                document.querySelector("#updateForm b").textContent = username.value;
                document.querySelector("#updateForm span").textContent = fullname.value;

            }else{
                html =  `<div class="alert alert-danger " role="alert">
                    	  ${message}
                      </div>`;
            }

            document.querySelector('#flash').innerHTML = html;
            document.querySelector('.btn-save').style.opacity = "1";

        },
        error: function(){
            console.log("Error:"+error);
            var html =  `<div class="alert alert-danger" role="alert">
                      Something went wrong.
                    </div>`;

            document.querySelector('#flash').innerHTML = html;

        }
    });


}

