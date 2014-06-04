/*
 * 表单组件: 独立出来的表单
 * @author: freemen 
 * @date: 2014-05-30
 * */

;(function() {
// 不能随意构造全局变量
var temform= {
        createFromConfig: function( config, formareaID ) {
            html = "";
            //register this form
            var formID = hit.PARAMETER.global.registerComponent('form');
            html += ('<form id=' + formID + '><fieldset><legend ');
            // make the <legend> of the <fieldset>
            if( config.formName == '' || config.formName == null ) {
                html += '></legend>';
            } else {
                html += ' style="margin:0 auto 0 auto"><h1>' + config.formName + '</h1></legend>'; 
            }

            //begin to draw the groups
            var i, len, groupEndHtml;
            for(i=0, len=config.groups.length; i<len; i++) {
                thisgroup = config.groups[i];
                html += ('<div class="form-group" index="g_'+i+'">');
                //show the frame and the groupName
                if ( thisgroup.showFrame ) {
                    html += '<fieldset>';
                    groupEndHtml = '</fieldset>';
                    if( thisgroup.groupName == '' || thisgroup.groupName == null ) {
                        html += '<legend></legend>';
                    } else {
                        html += ('<legend>' + thisgroup.groupName + '</legend>');
                    }
                }

                //draw all the items:
                var ii, itemlen;
                for(ii=0, itemlen=thisgroup.items.length; ii<itemlen; ii++) {
                    thisitem = thisgroup.items[ii];
                    html += this._itemConf2html(thisitem);
                }

                html += (groupEndHtml + '</div>');
            }

            //set the submit(return) button
            html += '<input type="submit" /> '

            html += '</fieldset></form>';
            console.log(config);
            $('.form-area#'+formareaID).empty().append(html);
        },

        _itemConf2html: function( item ) {
            var html = "";
            switch (item.type) {
                case 'checkbox':
                case 'radio':
                case 'richtext':
                    html = '<div name=' + item.name + ' divsize="wholeline" ><label for=' + item.name + '>' + item.label + '</label>' ;
                    break;
                default:
                    html = '<div name=' + item.name + ' ><label for=' + item.name + '>' + item.label + '</label>' ;
                    break;
            }
            //html = '<div name=' + item.name + ' divsizeLevel=' + item.sizeLevel + ' ><label for=' + item.name + '>' + item.label + '</label>' ;
            switch (item.type) {
                case 'text':
                    html += this.text( item );
                    break;
                case 'password':
                    html += this.password( item );
                    break;
                case 'checkbox':
                    html += this.checkbox( item );
                    break;
                default:
                    break;
            };
            html += '</div>';
            return html;
        },

        text: function( item ) {
            return '<input class="form-item" type="text" name=' + item.name + ' placeholder="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + ' required aria-required="true" />' ;
        },

        password: function( item ) {
            return '<input class="form-item" type="password" name=' + item.name + ' placeholder="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + ' required aria-required="true" />' ;
        },

        checkbox: function( item ) {
            var html = "", i=0, len=item.selections.length;
            for(; i<len; i++) {
                var focus = "";
                if( item.defaultValue.some(
                    function(x) {
                        return x == i;
                    }) ) {
                    //TODO: how to selected a checkbox by default
                    //focus = " select='select'"
                }
                html += '<input class="form-item" type="checkbox" name=' + item.name + ' value="' + item.selections[i] + '" required aria-required="true" ' + focus + ' />' + item.selections[i] ;
            }
            return html;
        },

        number: function( item ) {
            return '<input class="form-item" type="number" name=' + item.name + ' placeholder="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + ' required aria-required="true" />' ;
        },

        date: function( item ) {
            return '<input class="form-item" type="date" name=' + item.name + ' placeholder="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + ' required aria-required="true" />' ;
        },

        time: function( item ) {
            return '<input class="form-item" type="time" name=' + item.name + ' placeholder="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + ' required aria-required="true" />' ;
        },

        testitem: function( item ) {
            return '<input class="form-item" type="pig" name=' + item.name + ' placeholder=' + item.defaultValue + ' sizeLevel=' + item.sizeLevel + ' required aria-required="true" />' ;
        },

    };

    if ( hit.COMPONENT ){
    	hit.COMPONENT.theform = temform;
    } else {
    	hit.COMPONENT = {
    		theform: temform
    	}
    }
})();
