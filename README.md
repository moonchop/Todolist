# Todolist (react)

https://moonchop.github.io/Todolist/


<img src="https://user-images.githubusercontent.com/82392767/150637022-351b6541-a57a-492f-b2ff-4dfb2bd749de.png" width="800" height="400">

## 리액트의 첫걸음인 todolist
지금까지 클론코딩으로 감을 익혔고, 이번엔 오로지 구글링과 자문을 통해 todoList를 구현함.


## Head part(Head.jsx)

<img src="https://user-images.githubusercontent.com/82392767/150637195-9e15c7f4-3d8a-49c1-81bd-1166e7c0ed0e.png" width="200" height="120">

1. 년월일은 마운트 될 때 한번만 실행하도록 함.

2. 현재 시간은 setInterval을 통해 구현함. 처음엔 useEffect를 사용하지 않아서 setInterval이 누적되어 렌더링은 잘되어도 콘솔에 찍어보니 무수히 많이 출력됨.

3. List.jsx에서 list들의 갯수를 받아와 남은 할 일의 개수를 나타냄.

## Body part (List.jsx, Time.jsx)
<img src="https://user-images.githubusercontent.com/82392767/150637793-0546206b-f183-4098-8cf1-ca7eb8dc4e29.png" width="800" height="200">

### Input
1. input 값을 통해 List의 id, text, date를 object 형태로 업데이트함.
2. DatePicker를 통해 종료일을 지정해 줌.
  ```
<DatePicker   
      selected={endDate} 
      onChange={(date)=>setEndDate(date)}
      dateFormat="종료일 : yyyy-MM-dd"
      placeholderText="Set End Date"
      minDate={new Date()}
/>
  ```
3. input 값이 null 이거나, 종료일이 null 일 경우 list 추가는 안됨.

### List
좌측은 해야 할 lists, 우측은 완료한 lists

1. 마감시한은 각 list에 저장되어있는 date에서 가져옴.
2. 남은시간은 Moment를 이용함.
```
<Moment duration={new Date()} date={text.date}></Moment>
```
