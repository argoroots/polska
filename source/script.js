$(function() {
    $(window).on('resize', function () {
        var height = $(window).height()

        $('#map').height(height / 3)
        $('#content').css('margin-top', height / 3 + 'px')

        if ($('#image').length) {
            $('#image').height(height)
            $('#content').css('min-height', (height / 3) * 1.9 + 'px')
            $('#content').css('margin-bottom', height + 'px')
        } else {
            $('#content').css('border-bottom', 'none')
        }

    }).resize()

    $(window).scroll(function () {
        $('#map-container').css('top', $(window).scrollTop() * -0.6 + 'px')
    })

    var multiplePointers = $('.list-item').length > 1
    var bounds = new google.maps.LatLngBounds()
    var infowindow = new google.maps.InfoWindow()
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: parseFloat($('.list-item').data('geo').split(',')[0]),
            lng: parseFloat($('.list-item').data('geo').split(',')[1])
        },
        zoom: 11,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        styles: [
            {
                'featureType': 'poi.business',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'labels.icon',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'transit',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            }
        ]
    })

    $('.list-item').each(function () {
        var position = $(this).data('geo')
        if (position) {
            var info = '<p><a href="' + $(this).attr('href') + '"><strong>' + $(this).text() + '</strong></a></p><p>' + $(this).data('info') + '</p>'
            var marker = new google.maps.Marker({
                position: {
                    lat: parseFloat(position.split(',')[0]),
                    lng: parseFloat(position.split(',')[1]),
                },
                title: $(this).text(),
                map: map
            })

            if (multiplePointers) {
                marker.addListener('click', function() {
                    infowindow.setContent(info)
                    infowindow.open(map, this)
                })
                bounds.extend(marker.getPosition())
                map.fitBounds(bounds)
            }
        }
    })
})
