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
            // set the attr of the <div> around the item
            switch (item.type) {
                case 'checkbox':
                case 'radio':
                case 'richtext':
                    html = '<div name=' + item.name + ' divsize="wholeline" required aria-required="true" ><label for=' + item.name + ' type="selection">' + item.label + '</label>' ;
                    break;
                default:
                    html = '<div name=' + item.name + ' ><label for=' + item.name + '>' + item.label + '</label>' ;
                    break;
            }
            //html = '<div name=' + item.name + ' divsizeLevel=' + item.sizeLevel + ' ><label for=' + item.name + '>' + item.label + '</label>' ;
            //create the item's html code through various item type
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
                case 'radio':
                    html += this.radio( item );
                    break;
                case 'list':
                    html += this.list( item );
                    break;
                default:
                    break;
            };
            html += '</div>';
            return html;
        },

        text: function( item ) {
            var html = '<input class="form-item" type="text" id=' + item.name + ' placeholder="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + ' required aria-required="true" ';
            var len = 0;
            if ( item.selections != null ) {
                len = item.selections.length;
            }
            if (len > 0) {
                html += (' list="l_' + item.name + '" /><datalist id="l_' + item.name + '"><select>' );
                for (var i=0; i<len; i++) {
                    html += ('<option value="' + item.selections[i] + '"></option>' );
                }
                html += '</select></datalist>'
            } else {
                html += ' />';
            }
            return html;
        },

        password: function( item ) {
            return '<input class="form-item" type="password" id=' + item.name + ' placeholder="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + ' required aria-required="true" />' ;
        },

        checkbox: function( item ) {
            var html = "", i=0, len=item.selections.length;
            //TODO: deal with the checkboxs when it is required
            for(; i<len; i++) {
                var focus = "";
                if( item.defaultValue.some(
                    function(x) {
                        return x == i;
                    }) ) {
                    //TODO: how to selected a checkbox by default
                    focus = " selected='selected' "
                }
                html += '<input class="form-item" type="checkbox" name=' + item.name + ' id="c_' + item.selections[i] + '" ' + focus + ' />' + '<label for="c_' + item.selections[i] + '">' + item.selections[i] + '</label>' ;
            }
            return html;
        },

        radio: function( item ) {
            var html = "", i=0, len=item.selections.length;
            //TODO: deal with the checkboxs when it is required
            for(; i<len; i++) {
                var focus = "";
                if( i == item.defaultValue ) {
                    //TODO: how to selected a checkbox by default
                    focus = " selected='selected' "
                }
                html += '<input class="form-item" type="radio" name=' + item.name + ' id="r_' + item.selections[i] + '" ' + focus + ' />' + '<label for="r_' + item.selections[i] + '">' + item.selections[i] + '</label>' ;
            }
            return html;
        },

        list: function( item ) {            
            var html = "", i=0, len=item.selections.length;
            html += '<select class="form-item" id=' + item.name + ' >';
            for(; i<len; i++) {
                var focus = "";
                if( i == item.defaultValue ) {
                    focus = " selected='selected' "
                }
                html += '<option class="selectoption" value="' + item.selections[i] + '"' + focus + ' >' + item.selections[i] + '</option>';
            }
            html += '</select>';
            return html;
        },

        number: function( item ) {
            return '<input class="form-item" type="number" id=' + item.name + ' placeholder="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + ' required aria-required="true" />' ;
        },

        date: function( item ) {
            return '<input class="form-item" type="date" id=' + item.name + ' placeholder="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + ' required aria-required="true" />' ;
        },

        time: function( item ) {
            return '<input class="form-item" type="time" id=' + item.name + ' placeholder="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + ' required aria-required="true" />' ;
        },

        testitem: function( item ) {
            return '<input class="form-item" type="pig" id=' + item.name + ' placeholder=' + item.defaultValue + ' sizeLevel=' + item.sizeLevel + ' required aria-required="true" />' ;
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
