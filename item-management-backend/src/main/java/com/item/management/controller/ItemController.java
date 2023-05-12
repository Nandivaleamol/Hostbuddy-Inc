package com.item.management.controller;

import com.item.management.entity.Item;
import com.item.management.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/item")
@CrossOrigin("*")
public class ItemController {

    @Autowired
    private ItemService itemService;

    //add item rest endpoint
    @PostMapping("/add")
    public ResponseEntity<Item> addItem(@RequestBody Item item){
        return ResponseEntity.status(HttpStatus.CREATED).body(itemService.addItem(item));
    }

    //get single item by id
    @GetMapping("/id/{itemId}")
    public ResponseEntity<Item> getItemById(@PathVariable Integer itemId){
        return ResponseEntity.ok(itemService.getItemById(itemId));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Item>> getAllItems(){
        return ResponseEntity.ok(itemService.getAllItems());
    }
    @GetMapping("/name/{name}")
    public ResponseEntity<List<Item>> searchItemByName(@PathVariable String name){
        return ResponseEntity.ok(itemService.searchItemsByName(name));
    }
}
