# Skeletons

This app is designed for skeletons to use when contents are loading!  
It is very easy to use...
#### How?  Let's go
use this component everywhere you want to have skeleton before load the contents

    <Skeleton />

This component gives two required props
First is : **mode** ('article' , 'profile')
Use article mode for article. It has a heading and body for this purpose
and use profile mode for profiles also it has an avatar, name section and description
(See examples in example page)
Second props is : **animation** ('pulse' , 'wave')

    <Skeleton mode={'article'} animation={'pulse'} />
    <Skeleton mode={'article'} animation={'wave'} />
    <Skeleton mode={'profile'} animation={'pulse'} />
    <Skeleton mode={'profile'} animation={'wave'} />


Please leave comment and tell me if there is any bug or problem and give me your suggestions to improve 
