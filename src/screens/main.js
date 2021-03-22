
import { Component } from "react";
import InputScreen from './InputScreen/InputScreen';
import './main.scss';
import $ from 'jquery';
class MainScreen extends Component {
    constructor(props){
        super(props);
    }
    render() {
        function toggleNav() {
            // if nav is open, close it
            if ($("nav").is(":visible")) {
                $("nav").fadeOut();
                $("button").removeClass("menu");
            }
            // if nav is closed, open it
            else {
                $("button").addClass("menu");
                $("nav").fadeIn().css('display', 'flex');
            }
        }

        // when clicking + or ☰ button


        // close nav
        $("#nav-close").click(function () {
            toggleNav();
        });

        // scroll to sections
        $("nav li").click(function () {
            // get index of clicked li and select according section
            var index = $(this).index();
            var target = $("content section").eq(index);

            toggleNav();

            $('html,body').delay(300).animate({
                scrollTop: target.offset().top
            }, 500);
        });
        function myFunction() {
            // when clicking ☰ button, open nav
            if ($("header").hasClass("open")) {
                console.log("clickedddd")
                toggleNav();
            }
            // when clicking + button, open header
            else {
                $("header").addClass("open");
            }
        };
        return (
            <div>
                {/* <div class="poster-wrapper">
                    <div class="posters-container"> */}
                        <InputScreen LogOut={this.props.LogOut}/>
                    {/* </div>
                </div> */}
            </div>

        );
    }
}

export default MainScreen;




/* import { Component } from "react";
import InputScreen from './InputScreen/InputScreen';
import './main.scss';
import $ from 'jquery';
class MainScreen extends Component {
    render() {
        function toggleNav() {
            // if nav is open, close it
            if ($("nav").is(":visible")) {
                $("nav").fadeOut();
                $("button").removeClass("menu");
            }
            // if nav is closed, open it
            else {
                $("button").addClass("menu");
                $("nav").fadeIn().css('display', 'flex');
            }
        }

        // when clicking + or ☰ button


        // close nav
        $("#nav-close").click(function () {
            toggleNav();
        });

        // scroll to sections
        $("nav li").click(function () {
            // get index of clicked li and select according section
            var index = $(this).index();
            var target = $("content section").eq(index);

            toggleNav();

            $('html,body').delay(300).animate({
                scrollTop: target.offset().top
            }, 500);
        });
        function myFunction() {
            // when clicking ☰ button, open nav
            if ($("header").hasClass("open")) {
                console.log("clickedddd")
                toggleNav();
            }
            // when clicking + button, open header
            else {
                $("header").addClass("open");
            }
        };
        return (
            <div>
                <header>
                    <div class="triangle left"><h1>This is a title</h1></div>
                    <div class="triangle right"><h1>This is a title</h1></div>
                    <button onClick={myFunction}>hello</button>
                </header>
                <nav>
                    <ul>
                        <InputScreen />
                    </ul>
                </nav>
                <content>
                    <InputScreen />
                </content>
            </div>

        );
    }
}

export default MainScreen; */