package com.item.management.service.impl;

import com.item.management.entity.Item;
import com.item.management.repository.ItemRepository;
import com.item.management.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public Item addItem(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public Item getItemById(Integer itemId) {
        return itemRepository.findById(itemId).orElseThrow(()->new RuntimeException("Item Not Found With Id "+itemId));
    }

    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @Override
    public List<Item> searchItemsByName(String name) {
        return itemRepository.findAllItemsByName(name);
    }

    @Override
    public void deleteItemById(Integer itemId) {
        var item = itemRepository.findById(itemId).orElseThrow(() -> new RuntimeException("Item Not Found With Id " + itemId));
        itemRepository.delete(item);
    }

    @Override
    public Item updateItemById(Item item, Integer itemId) {
        var existingItem = itemRepository.findById(itemId).orElseThrow(() -> new RuntimeException("Item Not Found With Id " + itemId));
        existingItem.setName(item.getName());
        existingItem.setDescription(item.getDescription());
        return itemRepository.save(existingItem);
    }
}
