import _ from 'lodash'
import $ from 'jquery'
import './frank.less'

function component() {
    var $div = $('<div></div>')

    $div.html( _.join(['Hi', 'webpack'], ' '))

    return $div
}

$(document.body).append(component())