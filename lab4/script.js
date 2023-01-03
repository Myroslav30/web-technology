
(function (global){

	var ns ={};
	var homeHtml="";
	var allCategoriesUrl="data/categories.json";
	var categoriesTitleHtml="snippets/categories-title-snippet.html";
	var categoryHtml="snippets/category-snippet.html";
	var catalogItemsUrl="data/catalog/";
	var catalogItemsTitleHtml="snippets/categories-title-snippet.html";
	var catalogItemsHtml="";

	var insertHtml=function(selector, html){
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML=html;
	};

	var showLoading=function(selector){
		var html = "<div class='text-center'>";
		html +="<img scr='../img/ajax-loader.gif' alt=''loading></div>"
		insertHtml(selector,html);
	}

	var insertProperty = function(string, propName, propValue){
		var propToReplace="{{"+propName+"}}";
		string=string
		.replace(new RegExp(propToReplace,"g"), propValue);
		return string;
	}
	/*var switchCatalogToActive=function(){
		var classes = document.querySelector("#navHomeButton").className;
		classes = classes.replace(new RegExp("active","g"),"");
		document.querySelector("#navHomeButton").className=classes;

		classes=document.querySelector("#navHomeButton").className;
		if(classes indexOf("active")===-1)
	}*/
	/*document.addEventListener("DOMContentLoaded", function(event){
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
		llCategoriesUrl,
			buildAndShowCategoriesHTML);
	};*/

	ns.loadCatalogCategories=function(){
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			allCategoriesUrl,
			buildAndShowCategoriesHTML);
	};

	ns.loadCatalogItems=function(categoryShort){
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			catalogItemsUrl+categoryShort+".json",
			buildAndShowCatalogItemsHTML);
	};

	function buildAndShowCategoriesHTML(categories){
		$ajaxUtils.sendGetRequest(
			categoriesTitleHtml,
			function(categoriesTitleHtml){
				$ajaxUtils.sendGetRequest(
					categoryHtml,
					function(categoryHtml){
						var categoryViewHtml=
						buildCategoriesViewHtl(categories,
							categoriesTitleHtml,categoryHtml);
						insertHtml("#main-content",categoryViewHtml);
					},
					false);
			},
			false);
	}

	function buildCategoriesViewHtml(categories,
		categoriesTitleHtml, categoryHtml){
		var finalHtml=categoriesTitleHtml;
		finalHtml+="<section class='row'>";
		for (var i = 0; i < categories.length; i++) {
			var html = categoryHtml;
			var name=""+categories[i].name;
			var short_name=categories[i].short_name;
			html=
			insertProperty(html,"name",name);
			html=
			insertProperty(html,"short_name",short_name);
			finalHtml+=html;

		}
		finalHtml+="</section>";
		return finalHtml;
	}

	function buildAndShowCatalogItemHTML(categoryCatalogItems){
		$ajaxUtils.sendGetRequest(
			catalogItemsTitleHtml,
			function(catalogItemsTitleHtml){
				$ajaxUtils.sendGetRequest(
					catalogItemHtml,
					function(catalogItemHtml){
						var  catalogItemsViewHtml=
						buildCatalogItemsViewHTML(categoryCatalogItems,
							catalogItemsTitleHtml,
							catalogItemHtml);
						insertHtml("#main-content",catalogItemsViewHtml);
					},
					false);

			},
			false);
	}

	function buildCatalogItemsViewHtml(categoryCatalogItems, catalogItemsTitleHtml, 
		catalogItemHtml){
		catalogItemsTitleHtml=
		insertProperty(catalogItemsTitleHtml,
			"name",
			categoryCatalogItems.category.name);
		catalogItemsTitleHtml=
		insertProperty(catalogItemsTitleHtml,
			"special_instuctions",
			categoryCatalogItems.category.special_instructions);

		var finalHtml = catalogItemsTitleHtml;
		finalHtml+="<section class='row'>";

		var catalogItems=categoryCatalogItems.catalog_items;
		var catShortName= categoryCatalogItems.category.short_name;
		for (var i = 0; i < catalogItems.length; i++) {
			var html =catalogItemHtml;
			html =
			insertProperty(html, "short_name", catalogItems[i].short_name);
			html=
			insertProperty(html, "catShortName",
				catShortName);
			html=
			insertItemPrice(html,
				"price_retail",
				catalogItems[i].price_retail);
			html=
			insertItemAmount(html,
				"amount_wholesale",
				catalogItems[i].price_wholesale);
			html=
			insertItemAmount(html,
				"price_wholesalel",
				catalogItems[i].amount_wholesale);
			html=
			insertProperty(html,
				"name",
				catalogItems[i].name);
			html=
			insertProperty(html,
				"description",
				catalogItems[i].description);

			finalHtml+=html;
		}
		finalHtml+="</section>";
		return finalHtml;
	}

	function insertItemPrice(html,
		pricePropName,
		priceValue){
		if(!priceValue){
			return insertProperty(html, pricePropName, "");
		}
		priceValue="$"+priceValue.toFixed(2);
		html=insertProperty(html, pricePropName,priceValue);
		return html;
	}

	function insertItemAmount(html, 
		amountPropName,
		amountValue){
		if(!amountValue){
			return insertProperty(html, amountPropName,"");

		}
		amountValue="("+amountValue+")";
		html=insertProperty(html,amountPropName,amountValue);
		return html;
	}
	global.$ns=ns;

})(window);