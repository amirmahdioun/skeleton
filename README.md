# Skeletons

This app is designed for skeletons to use when contents are loading!  
It is very easy to use...
#### How?  Let's go
use this component every where you want to have skeleton before load the contents

    <Skeleton />

This component gives two required props
First is : **mode** ('article' , 'profile')
Use article mode for article. It has a heading and body for this purpose
and use profile mode for profiles also it has an avatar, name section and description
(See examples in example page)
Second props is : **animation** ('pulse' , 'wave', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'title', 'caption')

    <Skeleton mode={'article'} animation={'pulse'} />
    <Skeleton mode={'article'} animation={'wave'} />
    <Skeleton mode={'profile'} animation={'pulse'} />
    <Skeleton mode={'profile'} animation={'wave'} />
    <Skeleton mode={'h1'} animation={'wave'} />
    <Skeleton mode={'h1'} animation={'pulse'} />
    <Skeleton mode={'h2'} animation={'wave'} />
    <Skeleton mode={'h2'} animation={'pulse'} />
    <Skeleton mode={'h3'} animation={'wave'} />
    <Skeleton mode={'h3'} animation={'pulse'} />
    <Skeleton mode={'h4'} animation={'wave'} />
    <Skeleton mode={'h4'} animation={'pulse'} />
    <Skeleton mode={'h5'} animation={'wave'} />
    <Skeleton mode={'h5'} animation={'pulse'} />
    <Skeleton mode={'h6'} animation={'wave'} />
    <Skeleton mode={'h6'} animation={'pulse'} />
    <Skeleton mode={'body'} animation={'wave'} />
    <Skeleton mode={'body'} animation={'pulse'} />
    <Skeleton mode={'title'} animation={'wave'} />
    <Skeleton mode={'title'} animation={'pulse'} />
    <Skeleton mode={'caption'} animation={'wave'} />
    <Skeleton mode={'caption'} animation={'pulse'} />


Please leave comment and tell me if there is any bug or problem and give me your suggestions to improve 
