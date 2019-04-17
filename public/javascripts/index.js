/**
 * Created by upc on 2019/4/16.
 */
/**
 * 绑定函数
 */
function bindElement() {
    $("#select1 dd").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("select-all")) {
            $("#selectA").remove();
        } else {
            var copyThisA = $(this).clone();
            if ($("#selectA").length > 0) {
                $("#selectA a").html($(this).text());
            } else {
                $(".select-result dl").append(copyThisA.attr("id", "selectA"));
            }
        }
    });

    $("#select2 dd").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("select-all")) {
            $("#selectB").remove();
        } else {
            var copyThisB = $(this).clone();
            if ($("#selectB").length > 0) {
                $("#selectB a").html($(this).text());
            } else {
                $(".select-result dl").append(copyThisB.attr("id", "selectB"));
            }
        }
    });

    $("#select3 dd").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("select-all")) {
            $("#selectC").remove();
        } else {
            var copyThisC = $(this).clone();
            if ($("#selectC").length > 0) {
                $("#selectC a").html($(this).text());
            } else {
                $(".select-result dl").append(copyThisC.attr("id", "selectC"));
            }
        }
    });

    $("#selectA").live("click",
        function() {
            $(this).remove();
            $("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
        });

    $("#selectB").live("click",
        function() {
            $(this).remove();
            $("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
        });

    $("#selectC").live("click",
        function() {
            $(this).remove();
            $("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
        });

    $(".select dd").live("click",
        function() {
            if ($(".select-result dd").length > 1) {
                $(".select-no").hide();
            } else {
                $(".select-no").show();
            }
        });
}
/**
 * 测试登录功能
 */
function login() {
    var url="/demo/login";
    $.ajax({
        type: 'POST',
        url: encodeURI(url),
        data: {
            name: $("#name").val(),
            pwd:$("#pwd").val()
        },
        beforeSend: function(){
//                showLoading();
        },
        success: function(data) {
//                hiddenLoading();
            alert(data);
            console.log(data);
        },
        error: function() {
//                hiddenLoading();
            alert('数据加载失败');
        }
    });
}
/**
 * 测试前后端交互
 */
//前端值传入后端
function testAjax() {
    var atype = document.getElementById('selectA').innerText;
    var btype = document.getElementById('selectB').innerText;
    var ctype = document.getElementById('selectC').innerText;

    $.ajax({
        type:'POST',
        data:{
            A:atype,
            B:btype,
            C:ctype
        },
        // contentType :'application/json',
        // dataType:'json',
        url :'/demo/demo',
        success :function(data) {
            console.log(data);
            alert("OK");
        },
        error :function(e) {
            alert("error");
        }
    });
}
/**
 * 初始化函数
 */
$(document).ready(function() {
    bindElement();
    // setEchars();
});

