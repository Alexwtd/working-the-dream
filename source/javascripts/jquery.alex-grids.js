(function($) {



	$.fn.alexGrids = function(settings) {
		var defaults = {
			marginBottom: 20,
			marginRight: 20,
			padding: 30
		};

		var merged = $.extend({}, defaults, settings);
			
		var helper = {
			height: function(box) {
				return (box.height() + merged.marginBottom);
			},
			width: function(box) {
				return (box.width() + merged.marginRight);
			}
		};
		
		var container = this;
		var boxes = container.children();
		var height = (container.height() + merged.marginBottom);
		if(boxes.size() === 0) {
			return this;
		}

		container.css("width", (boxes.size() * helper.width(boxes.first())) + "px" );
		
		boxes.each(function(i, box) {
			$(box).removeAttr("style");
		});

		var space;
		var previous;
		var columns = 1;
		boxes.each(function(i, box) {
			box = $(box);

			if(i === 0) {
				space = height;
			} else if (space > helper.height(box)){
				var position = previous.position();
				box.css("left", position.left + "px");
				box.css("position", "absolute");
				box.css("top", (position.top + helper.height(previous)) + "px");
			} else if (space < helper.height(box)) {
				space = height;
				columns++;
			}
			space = space - helper.height(box);
			previous = box;
		});

		container.css("width", ((columns * helper.width(boxes.first())) + merged.marginRight) + "px" );

		return this;
	};

})(jQuery);