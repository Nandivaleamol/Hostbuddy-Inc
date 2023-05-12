package com.item.management.service;

import com.item.management.entity.Item;
import java.util.List;

public interface ItemService {

    //add item
    Item addItem(Item item);

    // get item by id
    Item getItemById(Integer itemId);

    //get all items
    List<Item> getAllItems();

    // searchItem
    List<Item> searchItemsByName(String name);

    //delete item by id
    void deleteItemById(Integer itemId);

    Item updateItemById(Item item, Integer itemId);

}
