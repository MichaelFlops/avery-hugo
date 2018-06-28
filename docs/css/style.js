import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "html": {
        "backgroundColor": "#39424E",
        "fontFamily": "Didact Gothic\",\"sans serif",
        "fontSize": 16
    },
    "body": {
        "fontSize": 16,
        "fontFamily": "Didact Gothic\",\"sans serif",
        "color": "#fff",
        "lineHeight": 2,
        "letterSpacing": 1.5,
        "textShadow": "none",
        "display": "flex",
        "WebkitBoxOrient": "vertical",
        "WebkitBoxDirection": "normal",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "WebkitBoxPack": "justify",
        "MsFlexPack": "justify",
        "justifyContent": "space-between",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "alignItems": "center",
        "opacity": 0.8
    },
    "h1": {
        "marginBottom": 0.5,
        "textAlign": "center",
        "fontFamily": "'Didact Gothic', sans-serif",
        "opacity": 0.6
    },
    "h2": {
        "marginBottom": 0.5,
        "textAlign": "center",
        "fontFamily": "'Didact Gothic', sans-serif",
        "opacity": 0.6
    },
    "h3": {
        "marginBottom": 0.5,
        "textAlign": "center",
        "fontFamily": "'Didact Gothic', sans-serif",
        "opacity": 0.6
    },
    "li": {
        "listStyleType": "none",
        "opacity": 0.8
    },
    "li a": {
        "opacity": 0.9
    },
    "p": {
        "display": "inline",
        "opacity": 0.8
    },
    "a": {
        "color": "#ccc",
        "textDecoration": "none",
        "borderBottom": "2px solid #ccc",
        "WebkitTransition": ".5s ease",
        "transition": ".5s ease"
    },
    "a:hover": {
        "color": "#fff",
        "fontStyle": "none"
    },
    "a:active": {
        "color": "#ccc"
    },
    "button": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "border": 0,
        "borderRadius": 5,
        "background": "#fff"
    },
    "button:hover": {
        "WebkitBoxShadow": "5px 5px #111",
        "boxShadow": "5px 5px #111"
    },
    "hr": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "backgroundColor": "transparent",
        "width": "50%",
        "borderStyle": "solid",
        "borderWidth": 1,
        "opacity": 0.3
    },
    "wrap": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "100%",
        "height": "100%"
    },
    "tag": {
        "width": "100%",
        "display": "flex",
        "WebkitBoxPack": "center",
        "MsFlexPack": "center",
        "justifyContent": "center",
        "backgroundColor": "transparent",
        "position": "relative",
        "bottom": 0,
        "paddingTop": 0.25,
        "paddingRight": 0,
        "paddingBottom": 0.25,
        "paddingLeft": 0,
        "marginRight": 0.5,
        "opacity": 0.6
    },
    "section": {
        "display": "flex",
        "WebkitBoxOrient": "vertical",
        "WebkitBoxDirection": "normal",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "WebkitBoxPack": "center",
        "MsFlexPack": "center",
        "justifyContent": "center",
        "WebkitBoxAlign": "start",
        "MsFlexAlign": "start",
        "alignItems": "flex-start"
    },
    "bottom-menu": {
        "display": "flex",
        "WebkitBoxOrient": "vertical",
        "WebkitBoxDirection": "normal",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "WebkitBoxPack": "center",
        "MsFlexPack": "center",
        "justifyContent": "center",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "alignItems": "center",
        "paddingTop": 3,
        "textAlign": "center"
    },
    "footer": {
        "width": "100%",
        "display": "flex",
        "WebkitBoxPack": "center",
        "MsFlexPack": "center",
        "justifyContent": "center",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "alignItems": "center",
        "textAlign": "center",
        "backgroundColor": "transparent",
        "position": "relative",
        "bottom": 0,
        "paddingTop": 3,
        "paddingRight": 1,
        "paddingBottom": 3,
        "paddingLeft": 1,
        "fontFamily": "Didact Gothic\",\"sans serif",
        "fontSize": 1,
        "lineHeight": 1,
        "opacity": 0.8
    },
    "footer a": {
        "borderBottom": "none"
    },
    "splash": {
        "marginTop": "auto",
        "marginRight": 0,
        "marginBottom": "auto",
        "marginLeft": 0,
        "height": 100 * vh,
        "width": "45%",
        "overflow": "hidden"
    },
    "big-link": {
        "fontFamily": "Didact Gothic\",\"sans serif",
        "fontSize": 3,
        "fontWeight": "300",
        "marginBottom": 2,
        "lineHeight": 1.5
    },
    "title": {
        "marginTop": 3,
        "fontFamily": "Didact Gothic\",\"sans serif",
        "fontSize": 2,
        "lineHeight": 3,
        "marginBottom": 2
    },
    "content": {
        "marginTop": 10,
        "marginRight": 1,
        "marginBottom": 10,
        "marginLeft": 1,
        "lineHeight": 2,
        "letterSpacing": 2
    },
    "content h1": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "textAlign": "left"
    },
    "content h2": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "textAlign": "left"
    },
    "content h3": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "textAlign": "left"
    },
    "content p": {
        "marginBottom": 1,
        "lineHeight": 1.8,
        "letterSpacing": 1.5
    },
    "content pre": {
        "borderRadius": 2,
        "backgroundColor": "#4f5b6b",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1
    },
    "content pre>code": {
        "border": "none"
    },
    "content code": {
        "fontSize": 0.9,
        "fontFamily": "'Source Code Pro', monospace",
        "backgroundColor": "#4f5b6b",
        "paddingTop": 0.2,
        "paddingRight": 0.2,
        "paddingBottom": 0.2,
        "paddingLeft": 0.2,
        "borderRadius": 2,
        "overflowX": "scroll"
    },
    "content img": {
        "width": "100%",
        "maxWidth": "100%",
        "display": "block",
        "marginTop": 2,
        "marginRight": "auto",
        "marginBottom": 2,
        "marginLeft": "auto"
    },
    "content blockquote": {
        "backgroundColor": "#ccc",
        "color": "#39424E",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "marginTop": 2,
        "marginRight": 1,
        "marginBottom": 2,
        "marginLeft": 1,
        "borderRadius": 3
    },
    "content blockquote ul": {
        "marginTop": 1
    },
    "content blockquote li": {
        "listStyle": "disc"
    },
    "content table": {
        "width": "100%",
        "borderCollapse": "collapse",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "overflowX": "auto"
    },
    "content table th": {
        "fontSize": 0.9,
        "paddingTop": 2,
        "paddingRight": 5,
        "paddingBottom": 2,
        "paddingLeft": 5,
        "textAlign": "center",
        "border": "1px solid #ccc"
    },
    "content table td": {
        "paddingTop": 2,
        "paddingRight": 5,
        "paddingBottom": 2,
        "paddingLeft": 5,
        "textAlign": "center",
        "border": "1px solid #ccc"
    },
    "content li": {
        "listStyle": "disc inside",
        "marginLeft": 1,
        "lineHeight": 2
    },
    "content li:last-child": {
        "marginBottom": 1
    },
    "grid": {
        "display": "grid",
        "gridGap": 20,
        "gridTemplateColumns": "repeat(auto-fit, minmax(400px, 1fr))",
        "gridAutoRows": 400
    },
    "grid>div": {
        "backgroundColor": "transparent",
        "overflow": "hidden"
    },
    "grid>div>img": {
        "height": "100%",
        "width": "100%",
        "OObjectFit": "cover",
        "objectFit": "cover"
    },
    "grid>div>a>img": {
        "height": "100%",
        "width": "100%",
        "OObjectFit": "cover",
        "objectFit": "cover"
    },
    "go-left": {
        "WebkitBoxPack": "start",
        "MsFlexPack": "start",
        "justifyContent": "flex-start",
        "WebkitBoxAlign": "start",
        "MsFlexAlign": "start",
        "alignItems": "flex-start"
    },
    "go-right": {
        "WebkitBoxPack": "end",
        "MsFlexPack": "end",
        "justifyContent": "flex-end",
        "WebkitBoxAlign": "end",
        "MsFlexAlign": "end",
        "alignItems": "flex-end"
    },
    "go-center": {
        "WebkitBoxPack": "center",
        "MsFlexPack": "center",
        "justifyContent": "center",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "alignItems": "center"
    }
});