
	
$( document ).ready(function() {
    
    const active_user = user_data.username;
    const active_user_authority = user_data.authority;
	
});
	
	
function all_activity() {
	
    $('#activity_list').html('');
    $('#activity_segment').addClass('loading');
	
    $.get('/api/all_activity', function(data, status){
        if (status == 'success') {
			
            $('#activity_segment').removeClass('loading');
				
            if (data.length == 0) {
					
                $('#activity_list').html('<h3 class=\'ui center aligned header\'>Sorry, nothing found.</h3>');
					
            } else {
				
                for (let x in data) {
                    create_items(data[x]);
                }
					
            }
				
        } else {
            alert('Err fetching results, please try again');
        }
    });
}
	
function curation_activity() {
	
    $('#activity_list').html('');
    $('#activity_segment').addClass('loading');
	
    $.get('/api/curation_activity', function(data, status){
        if (status == 'success') {
			
            $('#activity_segment').removeClass('loading');
				
            if (data.length == 0) {
					
                $('#activity_list').html('<h3 class=\'ui center aligned header\'>Sorry, nothing found.</h3>');
					
            } else {
				
                for (let x in data) {
                    create_items(data[x]);
                }
					
            }
				
        } else {
            alert('Err fetching results, please try again');
        }
    });
}
	
function re_curation_activity() {
	
    $('#activity_list').html('');
    $('#activity_segment').addClass('loading');
	
    $.get('/api/re_curation_activity', function(data, status){
        if (status == 'success') {
			
            $('#activity_segment').removeClass('loading');
				
            if (data.length == 0) {
					
                $('#activity_list').html('<h3 class=\'ui center aligned header\'>Sorry, nothing found.</h3>');
					
            } else {
				
                for (let x in data) {
                    create_items(data[x]);
                }
					
            }
				
        } else {
            alert('Err fetching results, please try again');
        }
    });
}
	
function finance_activity() {
	
    $('#activity_list').html('');
    $('#activity_segment').addClass('loading');
	
    $.get('/api/finance_activity', function(data, status){
        if (status == 'success') {
			
            $('#activity_segment').removeClass('loading');
				
            if (data.length == 0) {
					
                $('#activity_list').html('<h3 class=\'ui center aligned header\'>Sorry, nothing found.</h3>');
					
            } else {
				
                for (let x in data) {
                    create_items(data[x]);
                }
					
            }
				
        } else {
            alert('Err fetching results, please try again');
        }
    });
}
	
function team_activity() {
	
    $('#activity_list').html('');
    $('#activity_segment').addClass('loading');
	
    $.get('/api/team_activity', function(data, status){
        if (status == 'success') {
			
            $('#activity_segment').removeClass('loading');
				
            if (data.length == 0) {
					
                $('#activity_list').html('<h3 class=\'ui center aligned header\'>Sorry, nothing found.</h3>');
					
            } else {
				
                for (let x in data) {
                    create_items(data[x]);
                }
					
            }
				
        } else {
            alert('Err fetching results, please try again');
        }
    });
}
	
function discussions_activity() {
	
    $('#activity_list').html('');
    $('#activity_segment').addClass('loading');
	
    $.get('/api/discussions_activity', function(data, status){
        if (status == 'success') {
			
            $('#activity_segment').removeClass('loading');
				
            if (data.length == 0) {
					
                $('#activity_list').html('<h3 class=\'ui center aligned header\'>Sorry, nothing found.</h3>');
					
            } else {
				
                for (let x in data) {
                    create_items(data[x]);
                }
					
            }
				
        } else {
            alert('Err fetching results, please try again');
        }
    });
}
	
	
function create_items(data) {
		
    var item = document.createElement('div');
    item.className = 'item';
	
    var i = document.createElement('i');
    i.className = get_icon(data.type);
		
    var content = document.createElement('div');
    content.className = 'content';
		
    var a = document.createElement('a');
    a.className = 'header';
    a.innerText = data.comments;
    a.href = data.link;
    a.setAttribute('target', '_blank');
		
    var div = document.createElement('div');
    div.className = 'description';
		
    var author = document.createElement('a');
    author.className = 'ui label';
    author.innerHTML = '<i class=\'user icon\'></i>' + data.author;
		
    var type = document.createElement('a');
    type.className = 'ui label';
    type.innerHTML = '<i class=\'tag icon\'></i>' + data.type;
		
    var time = document.createElement('a');
    time.className = 'ui label';
    time.innerHTML = '<i class=\'wait icon\'></i> ' + jQuery.timeago(data.time);
		
    div.appendChild(author);
    div.appendChild(type);
    div.appendChild(time);
		
    content.appendChild(a);
    content.appendChild(div);
		
    item.appendChild(i);
    item.appendChild(content);
		
    document.getElementById('activity_list').appendChild(item);
		
}
	
function get_icon(type) {
		
    if (type == 'approve') return 'large green check middle aligned icon';
    else if (type == 'reject') return 'large red times middle aligned icon';
    else if (type == 're-approve') return 'large green thumbs up outline middle aligned icon';
    else if (type == 're-reject') return 'large red thumbs up outline middle aligned icon';
    else if (type == 'finance') return 'large yello dollar middle aligned icon';
    else if (type == 'add_team') return 'large green user plus middle aligned icon';
    else if (type == 'remove_team') return 'large red user times middle aligned icon';
    else if (type == 'add_sponsor') return 'large green handshake outline middle aligned icon';
    else if (type == 'remove_sponsor') return 'large red hand paper outline middle aligned icon';
    else if (type == 'add_to_blacklist') return 'large red eye slash outline middle aligned icon';
    else if (type == 'remove_from_blacklist') return 'large green eye outline middle aligned icon';
    else if (type == 'discussions') return 'large teal comments middle aligned icon';
	
}
	
	
all_activity();
	