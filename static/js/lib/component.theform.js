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
            var i, len, groupEndHtml='';
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
            html += '<input type="submit" href="#" onclick="" /> '

            html += '</fieldset></form>';
            console.log('COMPONENT.theform\'s config');
            console.log(config);
            return html;
            //$('.form-area#'+formareaID).empty().append(html);
        },

        _itemConf2html: function( item ) {
            var html = "";
            // set the attr of the <div> around the item
            switch (item.type) {
                case 'checkbox':
                case 'radio':
                case 'richtext':
                    html = '<div class="form-item" name=' + item.name + ' item-type=' + item.type + ' divsize="wholeline" required aria-required="true" ><label for=' + item.name + ' type="selection">';
                    break;
                default:
                    html = '<div class="form-item" name=' + item.name + ' item-type=' + item.type + ' ><label for=' + item.name + ' type="text" >';
                    break;
            }
            if ( item.required ) {
                 html += item.label + '<font color="red">*</font></label>' ;
            } else {
                 html += item.label + '</label>' ;
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
                case 'number':
                    html += this.number( item );
                    break;                
                case 'date':
                    html += this.date( item );
                    break;                
                case 'time':
                    html += this.time( item );
                    break;
                default:
                    break;
            };
            html += '</div>';
            return html;
        },

        text: function( item ) {
            var req = item.required ? ' required aria-required="true" ' : '';
            var html = '<input class="form-item" type="text" id=' + item.name + ' value="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + req;
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
            var req = item.required ? ' required aria-required="true" ' : '';
            return '<input class="form-item" type="password" id=' + item.name + ' value="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + req + ' />' ;
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
                    focus = " checked=true "
                }
                html += '<input class="form-item" type="checkbox" name=' + item.name + ' id="c_' + item.selections[i] + '" ' + focus + ' />' + '<label for="c_' + item.selections[i] + '" type="item">' + item.selections[i] + '</label>' ;
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
                    focus = " checked= true "
                }
                html += '<input class="form-item" type="radio" name=' + item.name + ' id="r_' + item.selections[i] + '" ' + focus + ' />' + '<label for="r_' + item.selections[i] + '" type="item">' + item.selections[i] + '</label>' ;
            }
            return html;
        },

        list: function( item ) {      
            var req = item.required ? ' required aria-required="true" ' : '';      
            var html = "", i=0, len=item.selections.length;
            html += '<select class="form-item" id=' + item.name + ' sizeLevel=' + item.sizeLevel + ' >';
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
            var req = item.required ? ' required aria-required="true" ' : '';
            return '<input class="form-item" type="number" id=' + item.name + ' value="' + item.defaultValue +  '" sizeLevel=' + item.sizeLevel + ' min=' + item.selections[0] + ' max=' + item.selections[1] + req + '/>' ;
        },

        date: function( item ) {
            var req = item.required ? ' required aria-required="true" ' : '';
            return '<input class="form-item" type="date" id=' + item.name + ' value="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + ' min=' + item.selections[0] + ' max=' + item.selections[1] + req + ' />' ;
        },

        time: function( item ) {
            var req = item.required ? ' required aria-required="true" ' : '';
            return '<input class="form-item" type="time" id=' + item.name + ' value="' + item.defaultValue + '" sizeLevel=' + item.sizeLevel + ' min=' + item.selections[0] + ' max=' + item.selections[1] + req + ' />' ;
        },

        testitem: function( item ) {
            var req = item.required ? ' required aria-required="true" ' : '';
            return '<input class="form-item" type="pig" id=' + item.name + ' value=' + item.defaultValue + ' sizeLevel=' + item.sizeLevel + req + ' />' ;
        },

        getFromInfo: function( formareaID ) {
            var items = $('.form-area#' + formareaID + ' div.form-item'),
                data = [], itemdata;
            //get all the items to read their value
            items.each(function(i) {
                // different type of item need various operation
                switch ( $(this).attr('item-type') ) {
                    case 'checkbox':
                        itemdata = [];
                        $(this).find('input.form-item[type="checkbox"]').each(function(){
                            if( $(this).is(':checked') ) {
                                itemdata.push($(this).nextAll('label').html());
                            }
                        });
                        break;
                    case 'radio':
                        $(this).find('input.form-item[type="radio"]').each(function(){
                            if( $(this).is(':checked') ) {
                                itemdata = $(this).nextAll('label').html();
                            }
                        });
                        break;
                    case 'list':
                        itemdata = $(this).find('select.form-item').val();
                        break;
                    case 'richtext':
                    default:
                        itemdata = $(this).find('input').val();
                        break;
                }
                //save the data
                var obj = {};
                obj[$(this).attr('name')] = itemdata;
                data.push( obj );
                // data.push( { tname : itemdata } );
            });
            return data;
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
