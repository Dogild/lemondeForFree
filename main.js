function remove()
{
    try
    {
        var divToDelete = document.getElementsByClassName('meter_overlay')[0];
        divToDelete.parentNode.removeChild(divToDelete);
    }
    catch(err)
    {
    }

setTimeout(function(){remove();},1000);

}

remove();